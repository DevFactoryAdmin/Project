import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppHome from './App';
import Profile from './Profile'; 
import SignUp from './Signup'; 
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen
          name="Home"
          component={AppHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          options={{headerShown: false}}
          component={Profile}
        />
        <Stack.Screen
          name="SignUp"
          options={{headerShown: false}}
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
