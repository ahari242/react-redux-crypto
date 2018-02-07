import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCurrency } from '../actions/index';






class CurrencySelector extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currency: 'USD'
    };
    this.renderCurrencyOptions = this.renderCurrencyOptions.bind(this);
    this.onInputChange = this.onInputChange.bind(this);     //take onInputChange, bind that function to this (SearchBar) and replace onInputChange with the new bound instance
  }

  onInputChange(event) {
    // let selectedCurrency = event.target.value
    let selectedCurrency = event;
    this.props.setCurrency(selectedCurrency);
    this.setState({ currency: selectedCurrency });
  }


  renderCurrencyOptions(currency) {
    return (
      <a className="dropdown-item" href="#" key={currency} onClick={() => this.onInputChange(currency)}>{currency}</a>
    )

  }


  render() {
    return (
      <form
        className="currency-selector-container"
      >
        <input
          type="text"
          disabled="true"
          value="Currency"
          htmlFor="currency"
          className="currency-selector-label" />

        <span className="dropdown">
          <button
            className="dropdown-toggle currency-selector-button"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            {this.state.currency}
          </button>
          <span
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButton"
          >
            {this.props.currencies.map(this.renderCurrencyOptions)}
          </span>
        </span>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    currencies: state.currencies
  };
}

export default connect(mapStateToProps, null)(CurrencySelector);