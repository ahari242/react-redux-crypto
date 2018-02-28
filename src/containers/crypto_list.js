import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { ClipLoader } from 'halogen';

import SearchBar from '../containers/search_bar';
import CurrencySelector from '../containers/currency_selector';

import PercentChange from '../components/percent_change';
import ValueFigure from '../components/value_figure';
import PageButton from '../components/page_button';

import { fetchCryptos, setCurrency, searchCryptos } from '../actions/index';



class CryptoList extends Component {

  constructor(props) {
    super(props);


    this.state = {
      page: 0,
      loading: true,
      searchTerm: ""
    }

    this.turnPage = this.turnPage.bind(this);
    this.goToPage = this.goToPage.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this);
    this.renderCrypto = this.renderCrypto.bind(this);
    this.getCryptoList = this.getCryptoList.bind(this);
    this.onBackButtonEvent = this.onBackButtonEvent.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    
  }

  componentDidMount() {

    window.onpopstate = this.onBackButtonEvent;

    const { page } = this.props.match.params;

    if (!page || 0 > page || !Number.isInteger(page)) {
      this.state.page = 0;
    } else {
      this.state.page = parseInt(page)
    }

    this.getCryptoList();
    
  }


  componentDidUpdate(prevProps, prevState) {

    if (this.props.cryptos != prevProps.cryptos) {
      this.setState({ loading: false })

      this.getCryptoList();
    }
    
  }


  getCryptoList() {
    if (this.state.searchTerm == "") {
      this.props.fetchCryptos(this.state.page, this.props.currency)
    } else {
      this.props.searchCryptos(this.state.searchTerm, this.props.currency)
    }
  }



  onBackButtonEvent(e) {
    this.setState({page: parseInt(this.props.match.params.page)})
    e.preventDefault();
    this.getCryptoList();
  }


  turnPage(to) {
    let page = this.state.page + to;
    this.goToPage(page);
    window.scrollTo(0, 0);
  }

  goToPage(to) {
    this.props.fetchCryptos(to, this.props.currency)
    this.setState({
      page: to,
      loading: true
    });
    this.props.history.push('/' + to)
  }

  changeCurrency(selectedCurr) {
    this.props.setCurrency(selectedCurr);
  }

  handleSearch(term) {

    this.setState({searchTerm: term})

    this.props.searchCryptos(term, this.props.currency);
  }


  renderCrypto(cryptoData) {

    let curr = this.props.currency.toLowerCase();


    return (
      <tr key={cryptoData.id}>
        <td className="crypto-rank">{cryptoData.rank}</td>
        <td><Link className="crypto-icon-container" to={`/crypto/${cryptoData.id}/`}><i className={"crypto-icon cc " + cryptoData.symbol}></i></Link></td>
        <td><Link to={`/crypto/${cryptoData.id}/`} className="crypto-name">{cryptoData.name}</Link></td>
        <td><ValueFigure dollarsign={true} decimals={false} amount={cryptoData['market_cap_' + curr]}></ValueFigure></td>
        <td><ValueFigure dollarsign={true} decimals={true} amount={cryptoData['price_' + curr]}></ValueFigure></td>
        <td className="text-right"><PercentChange value={cryptoData.percent_change_1h}></PercentChange></td>
        <td className="text-right"><PercentChange value={cryptoData.percent_change_24h}></PercentChange></td>
        <td className="text-right"><PercentChange value={cryptoData.percent_change_7d}></PercentChange></td>
      </tr>
    )


  }


  render() {

    let bodyContent = "";


    if (!this.state.loading && this.props.cryptos.length != 0) {

      bodyContent = this.props.cryptos.map(this.renderCrypto)

    } else {
      bodyContent =
        <tr>
          <td colSpan="8">
            <div className="crypto-list container">
              <ClipLoader color="#cccccc" size="2rem" className="loading-spinner" />
            </div>
          </td>
        </tr>

    }



    return (
      <div className="crypto-list container">

        <div className="crypto-list-header">
          <CurrencySelector setCurrency={(curr) => this.changeCurrency(curr)} />
          <SearchBar handleSubmit={(term) => this.handleSearch(term)} />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Name</th>
              <th>Market Cap</th>
              <th>Value</th>
              <th className="text-right">1H</th>
              <th className="text-right">24H</th>
              <th className="text-right">7D</th>
            </tr>
          </thead>
          <tbody>

            {bodyContent}

          </tbody>
          <tfoot>
          </tfoot>
        </table>

        <div className="crypto-list-footer">


          <PageButton
            direction="backwards"
            page={this.state.page}
            handleClick={() => this.turnPage(-1)}
          ></PageButton>


          <PageButton
            direction="forwards"
            page={this.state.page}
            handleClick={() => this.turnPage(1)}
          ></PageButton>


        </div>



      </div>
    )
  }
}



function mapStateToProps(state) {
  return {
    cryptos: state.cryptos,
    currency: state.currency
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCryptos, setCurrency, searchCryptos }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(CryptoList);