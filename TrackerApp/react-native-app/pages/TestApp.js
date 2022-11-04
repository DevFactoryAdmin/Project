import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const App = () => {
  // const [text, setText] = useState('');

  // const token = useSelector(state => {
  //   return state.token;
  // });

  // const dispatch = useDispatch();
  // const handlePress = e => {
  //   dispatch({type: 'setToken', payload: text});
  // };
  const text = useSelector(state => {
    return state.text;
  });
  const dispatch = useDispatch();
  const setTextFn = e => {
    dispatch({type: 'setText', payload: e});
  };

  return (
    <View>
      <ScrollView style={{marginBottom:100}}>
        <View
          style={{
            backgroundColor: 'blue',
            marginTop: 30,
            alignItems: 'center',
            marginHorizontal: 20,
            padding: 10,

            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: 'red',
              fontSize: 20,
              backgroundColor: 'yellow',
              flex: 2,
            }}>
            Sample One
          </Text>

          <Text
            style={{
              color: 'red',
              fontSize: 20,
              flexDirection: 'row',
              backgroundColor: 'green',
              flex: 1,
            }}>
            Sample Two
          </Text>
        </View>
        <Text style={{margin: 20}}>Username: {text}</Text>
        <TextInput
          style={{borderColor: 'gray', borderWidth: 1, margin: 20}}
          value={text}
          onChangeText={e => setTextFn(e)}
          // onChangeText={e => setText(e)}
          placeholder="SetValue"></TextInput>

        <Text style={{margin: 20}}>Username: {text}</Text>

        <Text style={{margin: 20}}>Username: {text}</Text>

        <Text style={{margin: 20}}>Username: {text}</Text>

        <Text style={{margin: 20}}>Username: {text}</Text>

        <Text style={{margin: 20}}>Username: {text}</Text>

        <Text style={{margin: 20}}>Username: {text}</Text>

        <Text style={{margin: 20}}>Username: {text}</Text>

        <Text style={{margin: 20}}>Username: {text}</Text>

        <Text style={{margin: 20}}>Username: {text}</Text>

        <Text style={{margin: 20}}>Username: {text}</Text>

        <Text style={{margin: 20}}>Username: {text}</Text>

        <Text style={{margin: 20}}>Username: {text}</Text>

        <Text style={{margin: 20}}>Username: {text}</Text>

        <Text style={{margin: 20}}>Username: {text}</Text>

        <Text style={{margin: 20}}>Username: {text}</Text>

        <Text style={{margin: 20}}>Username: {text}</Text>

        <Text style={{margin: 20}}>Username: {text}</Text>

        <Text style={{margin: 20}}>Username: {text}</Text>
        <TouchableOpacity
          // onPress={handlePress}
          style={{
            backgroundColor: 'gray',
            margin: 20,
            alignItems: 'center',
            padding: 10,
          }}>
          <Text style={{color: 'white'}}>SUBMIT</Text>
        </TouchableOpacity>
      </ScrollView>
      <View
        style={{
          backgroundColor: 'red',
          marginHorizontal: 10,
          position: 'absolute',
          flexDirection: 'row',
          padding: 30,
          bottom:10
        }}>
        <Text style={{flex: 1}}>Dashboard</Text>
        <Text style={{flex: 1}}>Trip</Text>
        <Text style={{flex: 1}}>Home</Text>
      </View>
    </View>
  );
};
export default App;
