import React, { Component } from 'react';

import {withRouter} from 'react-router-dom';

import CryptoList from '../containers/crypto_list';

class HeaderBar extends Component {

  constructor(props){
    super(props);
  }


  render() {
    return (
      <h2 className="header-logo">Placeholder</h2>

      // <div className="header-container">
      //     <img 
      //     src="../../style/images/crypto-logo.svg" 
      //     className="header-logo" 
      //     alt="logo"
      //     onClick={() => window.location.href = "/"}
      //     /> 
      // </div>

    )
  }

}


export default withRouter(HeaderBar);