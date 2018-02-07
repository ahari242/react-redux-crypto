import { SET_CURRENCY } from '../actions/index';

const initialState = "USD";

export default function (state = initialState, action) {

  switch (action.type) {
    case SET_CURRENCY:

      return action.payload;


  }

  return state;
}