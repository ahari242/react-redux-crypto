import React, { Component } from 'react';

export default class ValueFigure extends Component {

  constructor(props){
    super(props)
  }

  render() {

    let figure = this.props.amount;
    
    if (isNaN(figure)) {
      return (<span>Loading...</span>)
    }

    if (this.props.decimals) {
      figure = Number(figure).toFixed(2);
    } else{
      figure = Number(figure).toFixed(0);
    }

    figure = figure.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

    if (this.props.dollarsign){
      figure = "$" + figure
    }

    return (<span>{figure}</span>)
  }

}
