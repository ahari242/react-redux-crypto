import React, { Component } from 'react';

export default class PercentChange extends Component {

  constructor(props){
    super(props)
  }

  render() {

    let percent_change = parseFloat(this.props.value).toFixed(2);

    if (isNaN(percent_change)) {
      percent_change = ""
    }


    if (percent_change.charAt(0) == '-') {
      return (
        <span className="text-danger">{percent_change}</span>
      )
    } else {
      return (
        <span className="text-success">{percent_change}</span>
      )
    }
  }

}
