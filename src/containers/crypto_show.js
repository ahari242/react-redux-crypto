import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'halogen';
import { Sparklines, SparklinesLine } from 'react-sparklines';

import PercentChange from '../components/percent_change';
import ValueFigure from '../components/value_figure';

import { fetchCrypto } from '../actions/index';
import { bindActionCreators } from 'redux';

class CryptoShow extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchCrypto(id);
  }


  render() {


    let cryptoData = this.props.crypto[0];
    let paramId = this.props.match.params.id;

    console.log(cryptoData);


    if (!cryptoData || cryptoData.id != paramId) {
      return (
        <div className="crypto-show container">
          <ClipLoader color="#cccccc" size="2rem" className="loading-spinner" />
        </div>
      )
    } else {
      return (
        <div className="crypto-show container">
          <div className="row">

            <div className="col-lg-4">
              <div className="icon-container">
                <i className={"crypto-icon cc " + cryptoData.symbol}></i>
              </div>

              <div className="crypto-symbol">
                {cryptoData.symbol}
              </div>
            </div>

            <div className="col-lg-4">
              <table className="table crypto-table">
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{cryptoData.name}</td>
                  </tr>
                  <tr>
                    <td>Price ({this.props.currency})</td>
                    <td><ValueFigure dollarsign={true} decimals={true} amount={cryptoData["price_" + this.props.currency.toLowerCase()]}></ValueFigure></td>
                  </tr>
                  <tr>
                    <td>Market Cap ({this.props.currency})</td>
                    <td><ValueFigure dollarsign={true} decimals={false} amount={cryptoData['market_cap_' + this.props.currency.toLowerCase()]}></ValueFigure></td>
                  </tr>
                  <tr>
                    <td>Available Supply</td>
                    <td><ValueFigure dollarsign={false} decimals={false} amount={parseInt(cryptoData.available_supply)}></ValueFigure></td>
                  </tr>
                  <tr>
                    <td>Total Supply</td>
                    <td><ValueFigure dollarsign={false} decimals={false} amount={parseInt(cryptoData.total_supply)}></ValueFigure></td>
                  </tr>
                  <tr>
                    <td>Max Supply</td>
                    <td><ValueFigure dollarsign={false} decimals={false} amount={parseInt(cryptoData.max_supply)}></ValueFigure></td>
                  </tr>

                </tbody>
              </table>
            </div>
            <div className="col-lg">
              <div className="crypto-charts-container">
                <div className="chart-label">Last Hour</div>
                <Sparklines data={[42, 2, 99, 324, 136]} width={100} height={20} margin={5}>
                  <SparklinesLine color="#cccccc" />
                </Sparklines>

                <div className="chart-label">Last Day</div>
                <Sparklines data={[37, 18, 46, 9, 23, 45, 4, 92, 114, 63, 212, 42, 2, 99, 324, 136]} width={100} height={20} margin={5}>
                  <SparklinesLine color="#999999" />
                </Sparklines>


                <div className="chart-label">Last Week</div>
                <Sparklines data={[684, 434, 216, 599, 342, 117, 454, 315, 224, 642, 221, 37, 18, 46, 9, 23, 45, 4, 92, 114, 63, 212, 42, 2, 99, 324, 136]} width={100} height={20} margin={5}>
                  <SparklinesLine color="#5a5a5a" />
                </Sparklines>
              </div>

            </div>
          </div>
        </div>
      )
    }




  }

}



function mapStateToProps(state) {   //this.props === ownProps
  return {
    crypto: state.crypto,
    currency: state.currency
  };
}

export default connect(mapStateToProps, { fetchCrypto })(CryptoShow)