import React, {useEffect, useState} from 'react';
import img from './images/one.png';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native'; 
import style from './style.js';
import database from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';

export default function App() {
  const [data, setData] = useState('testing');

  useEffect(() => { 
  }, []);
 const navigation=useNavigation();

  const handleInsert = () => {
    database()
      .ref('/users/suresh/password123')
      .set({
        email: 'suresh',
        password: 'password123',
        age: 25,
      })
      .then(() => console.log('Data set.'));
  };
  const handleRead = () => {
    database()
      .ref('/users/suresh/password123')
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
      });
  };
  const handleAuth = () => { 
  };
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleSignin=(e)=>{
    // alert('hi')
    navigation.navigate("Profile")
  }

  return (
    <View style={[style.Welcome, style.bg]}>
      <Text style={[style.yellow, style.s1, style.bold, style.title]}>
        A Plea to reduce carbon footprint{data}
      </Text>
      <Image source={img} />
      <View style={[style.textContainer, {}]}>
        <Text style={[style.shadedwhite, style.para, style.s4]}>
          We are conducting this exercise to baseline the carbon footprint of
          individuals and communities.
        </Text>
        <Text style={[style.shadedwhite, style.para, style.s4]}>
          We truly appreciate your effort and time, you small actions would add
          up and the compound effect of the community would be a stronger force
          to achieve. substantial carbon reduction by 2030.
        </Text>
        <Text style={[style.shadedwhite, style.para, style.s4]}>
          Thank you for your valuable contribution that would leave a lasting
          impact no humanity and future generations.
        </Text>
      </View>
      <Text style={[style.white, style.s2, style.smalltxt]}>
        Already have an account?
      </Text>
      <TouchableOpacity style={[style.button,{display:'none'}]} onPress={handleInsert}>
        <Text style={style.yellow}>INSERT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[style.button,{display:'none'}]} onPress={handleRead}>
        <Text style={style.yellow}>READ DATA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[style.button,{display:'none'}]} onPress={handleAuth}>
        <Text style={style.yellow}>AUTH</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[style.button]} onPress={e=>handleSignin(e)}>
        <Text style={style.yellow}>SIGN IN</Text>
      </TouchableOpacity>
      <Text style={[style.white, style.s2]}>
        Want to champion carbon reduction?
      </Text>
      <TouchableOpacity onPress={e=>handleSignUp(e)}>
        <Text style={[style.white, style.s3, style.bold]}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}
