import React, { Component } from 'react';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data)/data.length)
}

export default (props) => {

  return (
    <div>
      <div>{average(props.data)} {props.units}</div>
    </div>
  )
}