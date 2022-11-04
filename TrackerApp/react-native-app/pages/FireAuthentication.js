import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function App() {
  const createUser = e => {
    auth()
      .createUserWithEmailAndPassword('devtrainiasdngnew@email.com', 'test@123')
      .then(userCred => {
        alert(JSON.stringify(userCred.additionalUserInfo.isNewUser) + '');
      })
      .catch(err => alert(err));
  };

  const signInUser = e => {
    auth()
      .signInWithEmailAndPassword('test@email.com', 'test@123')
      .then(userCred => {
        console.log(userCred);
        auth()
          .currentUser.getIdToken(true)
          .then(tkn => {
            console.log(tkn);
          });
      })
      .catch(err => alert(err));
  };

  return (
    <View>
      <TouchableOpacity
        style={{backgroundColor: 'red', padding: 10, margin: 20}}
        onPress={e => createUser(e)}>
        <Text style={{fontSize: 50}}>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'red', padding: 10, margin: 20}}
        onPress={e => signInUser(e)}>
        <Text style={{fontSize: 50}}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
