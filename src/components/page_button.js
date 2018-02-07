import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { browserHistory } from 'react-router';


import { fetchCryptos } from '../actions/index';



export default class PageButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.direction == "backwards") {
      return(<div
        className={this.props.page == 0 ? "page-button page-button-prev page-button-disabled" : "page-button page-button-prev"}
        onClick={() => this.props.handleClick(-1)}>Prev</div>)
    } else {
      return(<div
        className="page-button page-button-next"
        onClick={() => this.props.handleClick(-1)}>Next</div>)
    }




  }
}
