import {FETCH_USER} from '../actions/types';

export default function f(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
