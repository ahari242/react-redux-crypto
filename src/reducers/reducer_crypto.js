import { FETCH_CRYPTO } from '../actions/index';

export default function (state = [], action) {

  switch (action.type) {
    case FETCH_CRYPTO:

      return action.payload.data;

  }

  return state;
}