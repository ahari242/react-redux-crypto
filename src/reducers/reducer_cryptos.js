import { FETCH_CRYPTOS, SEARCH_CRYPTOS } from '../actions/index';

const initialState = {
  cryptos: []
}

export default function (state = [], action) {

  switch (action.type) {
    case FETCH_CRYPTOS:

      return action.payload.data;

    
    case SEARCH_CRYPTOS:

      return action.payload.data;

    
    

  }

  return state;
}