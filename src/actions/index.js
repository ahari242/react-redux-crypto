import axios from 'axios';

const API_KEY = "none";

const ROOT_URL = `https://api.coinmarketcap.com/v1/ticker/`;

export const FETCH_CRYPTOS = 'FETCH_CRYPTOS';   //why? to have a consistent variable between action creators and reducers
export const FETCH_CRYPTO = 'FETCH_CRYPTO';
export const SEARCH_CRYPTOS = 'SEARCH_CRYPTOS';
export const BAD_SEARCH = 'BAD_SEARCH';
export const SET_CURRENCY = 'SET_CURRENCY';
export const GET_CURRENCIES = 'GET_CURRENCIES';


export function fetchCryptos(page, currency){

  const url = `${ROOT_URL}?convert=${currency}&limit=50&start=${page*50}`;
  const request = axios.get(url,{
    'headers': {
    }
  });

  return {
    type: FETCH_CRYPTOS,
    payload: request
  }
}

export function fetchCrypto(id){

  const url = `${ROOT_URL}${id}/`;

  const request = axios.get(url,{
    'headers': {
    }
  });

  return {
    type: FETCH_CRYPTO,
    payload: request
  }

}


export function searchCryptos(term, currency){

  const url = `${ROOT_URL}${term}/?convert=${currency}`;
  
  const request = axios.get(url,{
    'headers': {
    }
  }).catch(err => {
    return {
      type: BAD_SEARCH,
      payload: err
    }
  });

  return {
    type: SEARCH_CRYPTOS,
    payload: request
  }
}


export function setCurrency(currency) {

  return {
    type: SET_CURRENCY,
    payload: currency
  }

}

export function getCurrencies() {

  return {
    type: GET_CURRENCIES
  }

}