import React from 'react';
import img from './images/one.png';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
export default function NewPage() {
  return (
    <ScrollView>
      <View style={[style.outer, {flexDirection: 'column'}]}>
        <View
          style={[
            { 
              flexDirection: 'row',
              backgroundColor: 'yellow',
             height:50
            },
          ]}>
          <View style={{flex: 1, backgroundColor: 'red'}} />
          <View style={{flex: 2, backgroundColor: 'darkorange'}} />
          <View style={{flex: 1, backgroundColor: 'green'}} />
        </View>
        <Text style={style.yellowtext}>Username</Text>
        <TextInput
          placeholder="Username"
          style={{backgroundColor: 'white', width: '100%'}}></TextInput>
        <Text style={[style.yellowtext, style.title]}>
          A Plea to reduc sdakfdj
        </Text>
        <View
          style={{
            borderColor: 'white',
            width: 20,
            height: 20,
            borderWidth: 1,
            marginBottom: 10,
            borderRadius: 10,
          }}></View>

        <Image source={img} />
        <View style={{width: '100%'}}>
          <Text style={[style.white, {marginBottom: 20, marginTop: 10}]}>
            FirstlineFirstlineFirstli neFirstlineFirstli neFirstlin
            eFirstlineFirstlineFirstline
          </Text>
          <Text style={[style.white, {marginBottom: 20}]}>
            FirstlineFirstlineFirstli neFirstlineFirstli neFirstlin
            eFirstlineFirstlineFirstline
          </Text>
          <Text style={[style.white, {marginBottom: 20}]}>
            FirstlineFirstlineFirstli neFirstlineFirstli neFirstlin
            eFirstlineFirstlineFirstline
          </Text>
        </View>
        <View style={{width: '100%'}}>
          <Text style={[style.white, {marginBottom: 20, marginTop: 10}]}>
            FirstlineFirstlineFirstli neFirstlineFirstli neFirstlin
            eFirstlineFirstlineFirstline
          </Text>
          <Text style={[style.white, {marginBottom: 20}]}>
            FirstlineFirstlineFirstli neFirstlineFirstli neFirstlin
            eFirstlineFirstlineFirstline
          </Text>
          <Text style={[style.white, {marginBottom: 20}]}>
            FirstlineFirstlineFirstli neFirstlineFirstli neFirstlin
            eFirstlineFirstlineFirstline
          </Text>
        </View>
        <View style={{width: '100%'}}>
          <Text style={[style.white, {marginBottom: 20, marginTop: 10}]}>
            FirstlineFirstlineFirstli neFirstlineFirstli neFirstlin
            eFirstlineFirstlineFirstline
          </Text>
          <Text style={[style.white, {marginBottom: 20}]}>
            FirstlineFirstlineFirstli neFirstlineFirstli neFirstlin
            eFirstlineFirstlineFirstline
          </Text>
          <Text style={[style.white, {marginBottom: 20}]}>
            FirstlineFirstlineFirstli neFirstlineFirstli neFirstlin
            eFirstlineFirstlineFirstline
          </Text>
        </View>
        <View style={{width: '100%'}}>
          <Text style={[style.white, {marginBottom: 20, marginTop: 10}]}>
            FirstlineFirstlineFirstli neFirstlineFirstli neFirstlin
            eFirstlineFirstlineFirstline
          </Text>
          <Text style={[style.white, {marginBottom: 20}]}>
            FirstlineFirstlineFirstli neFirstlineFirstli neFirstlin
            eFirstlineFirstlineFirstline
          </Text>
          <Text style={[style.white, {marginBottom: 20}]}>
            FirstlineFirstlineFirstli neFirstlineFirstli neFirstlin
            eFirstlineFirstlineFirstline
          </Text>
        </View>
        <Text style={style.white}>Already Have account</Text>
        <TouchableOpacity style={style.button}>
          <Text style={style.yellowtext}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={[style.white, {fontSize: 10, marginVertical: 10}]}>
          Already Have account
        </Text>
        <TouchableOpacity>
          <Text style={style.white}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const style = StyleSheet.create({
  outer: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  yellowtext: {color: 'yellow'},
  white: {color: 'white'},
  button: {
    backgroundColor: 'rgba(185, 160, 173, 0.2)',
    width: '100%',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 50,
  },
});
