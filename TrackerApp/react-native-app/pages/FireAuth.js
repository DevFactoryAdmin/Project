import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [token, setToken]=useState("")

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const createUser = e => {
    // auth().createUserWithEmailAndPassword(em,pass).then().


    auth()
      .createUserWithEmailAndPassword('devtrainiasdngnew@email.com', 'test@123')
      .then(userCred => {
        alert(JSON.stringify(userCred.additionalUserInfo.isNewUser)+"")
        // if (userCred) { 
        //   // setToken(userCred)
        // }
      }).catch(err=>alert(err))
  };
  const signInUser = e => {

    // auth().signInWithEmailAndPassword(em, ps)
    // .then(reslt=>{
    //   auth().currentUser.getIdToken(true).then().catch(err=>{
    //     alert("error")
    //   })
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })


    auth()
      .signInWithEmailAndPassword('test@email.com', 'test@123')
      .then(userCred => {
        // alert(JSON.stringify(userCred)+"")
        console.log(userCred)
        auth().currentUser.getIdToken(true).then((tkn)=>{
         console.log(tkn)
        })
        // if (userCred) { 
        //   setToken(userCred)
        // }
      }).catch(err=>alert(err))
  };
 
    return (
      <View>
        <TouchableOpacity style={{backgroundColor:'red', padding:10, margin:20,}} onPress={e => createUser(e)}>
          <Text style={{fontSize:50}}>SignUp</Text>
        </TouchableOpacity>
      </View>
    ); 
}
