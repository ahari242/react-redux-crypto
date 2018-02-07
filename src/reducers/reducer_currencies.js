import { GET_CURRENCIES } from '../actions/index';

const initialState = ["USD", "AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "ZAR"]


export default function (state = initialState, action) {

  switch (action.type) {
    case GET_CURRENCIES:
    
  }

  return state;
}