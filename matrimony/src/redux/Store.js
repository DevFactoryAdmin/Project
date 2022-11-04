import { legacy_createStore } from "redux";

const initialState = {
  init: {
    profilefor:"test",
    name:"",
    mobileno:""
  },
};
const Reducer = (prevState = initialState, action) => {
  switch (action) {
    default:
      return { ...prevState };
  }
};

const store = legacy_createStore(Reducer);
export default store;
