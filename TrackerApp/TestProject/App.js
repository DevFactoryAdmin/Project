import axios from 'axios'; //axios is used for calling API
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

// NodeJs Code Sample
// app.post("/getdata", async (req, res) => {
//   let StartLocation=req.body.StartLocation;
//   const users = await db.collection("abc@email.com").doc("trip_1").get();
//   res.json({"collectiondata":users, parameter:StartLocation});
// });

export default function App() {
  const [result, setResult] = useState('result');
  const [input, setInput] = useState(''); // state variable declaration

  const handleClick = e => {
    const url = 'http://192.168.27.32:4000/getdata'; //goto cmd and ipconfig to get ipaddress
    const parameters = {
      StartLocation: input,
    };
    const header = {};
    axios
      .post(url, parameters, header)
      .then(response => {
        console.log('result=>' + JSON.stringify(response.data));
        setResult(JSON.stringify(response.data));
      })
      .catch(err => {
        console.log('err=>' + err);
      });
  };

  return (
    <ScrollView style={{height: '100%', backgroundColor: 'white'}}>
      <Text style={{fontSize: 25, margin: 50}}>Input: {input}</Text>
      <Text style={{fontSize: 25, margin: 50}}>Output: {result}</Text>
      <View style={{backgroundColor: 'black'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:20,
          }}>
          <View
            style={{
              width: 30,
              marginRight: 10,
              height: 30,
              borderRadius: 15,
              borderColor: 'white',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                borderColor: 'white',
                backgroundColor: 'white',
                borderWidth: 1,
              }}></View>
          </View>
          <Text style={{color: 'white', fontSize: 16}}>Option 1</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:20,
          }}>
          <View
            style={{
              width: 30,
              marginRight: 10,
              height: 30,
              borderRadius: 15,
              borderColor: 'white',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            
          </View>
          <Text style={{color: 'white', fontSize: 16}}>Option 2</Text>
        </View>
      </View>
      <TextInput
        value={input}
        placeholder="Input"
        style={{fontSize: 25}}
        onChangeText={e => setInput(e)}></TextInput>
      <TouchableOpacity
        style={{backgroundColor: 'red', margin: 25, alignItems: 'center'}}
        onPress={e => handleClick(e)}>
        <Text style={{fontSize: 25}}>SIGNUP</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
