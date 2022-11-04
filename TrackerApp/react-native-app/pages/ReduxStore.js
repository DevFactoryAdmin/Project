import {Provider} from 'react-redux';
import store from './redux/Store';
import Navigation from './Navigation';
import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
 import TestApp from './TestApp'
export default function ReduxStore() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
