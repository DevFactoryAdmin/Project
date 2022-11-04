 
import { legacy_createStore } from "redux";

const initialState = {
  token: 'test',
  newv: '',
  text:'Test value'
}; 
// const samplejson={
//   "key":"value"
// }
// samplejson={...samplejson,"key":'value2'}
// {type: 'setToken', payload: text}
const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'setToken':
      return {...prevState, token: action.payload};
    case 'setNewVariable':
      return {...prevState, newv: action.payload};
    case 'setText':
      return {...prevState, text: action.payload}
    default:
     return prevState;
  }
};
const store=legacy_createStore(reducer)
export default store;

// action => {
//     type:"setToken"
//     payload: 123
// }
