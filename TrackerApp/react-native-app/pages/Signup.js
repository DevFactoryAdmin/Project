import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import style from './style.js';
import auth from '@react-native-firebase/auth';

export default function App() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 


  // const token=useSelector(state=>state.token)
  // const dispatch=useDispatch();

  const handleSignUp = e => {
  

    // alert('test')
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCred => {
        alert(JSON.stringify(userCred) + '');
      })
      .catch(err => alert(err));
  };

  const handleSignIn = e => {
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(userCred => {
      console.log(userCred);
      auth()
        .currentUser.getIdToken(true)
        .then(tkn => {
          // dispatch({type:"setToken", payload:tkn})
          alert(tkn);
        });
    })
    .catch(err => alert(err));
  };

  return (
    <View style={[style.bg]}>
      <Text style={[style.yellow, style.s1, style.bold, style.title]}>
        Sign up
      </Text>
      <View>
        <Text style={[style.shadedwhite, style.bold]}>Email</Text>
        <TextInput
          style={[style.bordedtext, {color: 'white'}]}
          value={email}
          onChangeText={e => setEmail(e)}
          placeholder="Enter email"
          placeholderTextColor={'gray'}></TextInput>
      </View>
      <View>
        <Text style={[style.shadedwhite, style.bold]}>Password</Text>
        <TextInput
          style={[style.bordedtext, {color: 'white'}]}
          placeholder="Enter password"
          placeholderTextColor={'gray'}
          secureTextEntry={true}
          onChangeText={e => setPassword(e)}
          value={password}></TextInput>
      </View>
      <Text style={[style.white, style.s2, style.smalltxt]}>
        Passwords must contain at least 8 characters including a number and
        special character
      </Text>
      <View style={[style.bordedtext, style.left]}>
        <Text style={[style.white, style.s3]}>
          To execute the survey successfully. We need to capture your land based
          trips and low-carbon mobility choices.
        </Text>
        <Text style={[style.white, style.s3]}>
          To be able to do this. You need to agree to share the following data:
        </Text>
        <Text style={[style.white, style.s3]}>Location Data</Text>
        <Text style={[style.white, style.s3]}>Motion Data</Text>
        <Text style={[style.white, style.s3]}>
          To know more, including how we use your data, please view our Privacy
          Policy.
        </Text>
      </View>
      <TouchableOpacity style={[style.button]} onPress={e => handleSignUp(e)}>
        <Text style={style.yellow}>AGREE and SIGN UP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[style.button]} onPress={e => handleSignIn(e)}>
        <Text style={style.yellow}>SIGNIN</Text>
      </TouchableOpacity>
      <Text style={[style.white, style.s2, style.smalltxt]}>
        By signing up you are agreeing to our Terms of Service
      </Text>
    </View>
  );
}
