import { combineReducers } from 'redux';
import CryptoReducer  from './reducer_crypto';
import CryptosReducer  from './reducer_cryptos';
import CurrencyReducer from './reducer_currency';
import CurrenciesReducer from './reducer_currencies';

const rootReducer = combineReducers({
  cryptos: CryptosReducer,
  crypto: CryptoReducer,
  currency: CurrencyReducer,
  currencies: CurrenciesReducer
});

export default rootReducer;
