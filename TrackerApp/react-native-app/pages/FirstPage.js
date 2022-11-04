import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function FirstPage() {
  return (
    <View>
      <View style={style.outer}></View>
      <View style={{backgroundColor: 'red', paddingTop: 10}}></View>
      <View
        style={[
          {backgroundColor: 'red', paddingTop: 10},
          {marginTop: 50},
        ]}></View>
      <View style={[style.outer, style.inner]}></View>
    </View>
  );
}

const style = StyleSheet.create({
  outer: {backgroundColor: 'red', paddingTop: 10},
  inner: {marginTop: 50},
});
