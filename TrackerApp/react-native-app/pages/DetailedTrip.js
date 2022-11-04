import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import {
  View,
  Text,
  ScrollView, 
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MapView, {UrlTile} from 'react-native-maps';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
import {useNavigation} from '@react-navigation/native';
import style from './style.js';
import userpic from './images/usericon.png';
import i1 from './images/1.png';
import i2 from './images/2.png';
import i3 from './images/3.png';
import {PieChart, BarChart, ProgressChart} from 'react-native-chart-kit';

import {WebView} from 'react-native-webview';

export default function App() {
  const datat = {
    data: [0.8],
  };
  const data = [
    {
      name: 'Seoul',
      population: 21500000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Toronto',
      population: 2800000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Beijing',
      population: 527612,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'New York',
      population: 8538000,
      color: '#ffffff',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Moscow',
      population: 11920000,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];
  // const file=require('./test.html');

  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  
  const backClick = () => {
    navigation.goBack();
  };
  const handleSignUp = () => {
    // alert('hi');
    navigation.navigate('DetailedTrip');
    // navigation.navigate('Profile');
  };
  const chartConfig = {
    backgroundColor: 'transparent',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };
  const chartConfig2 = {
    backgroundColor: 'transparent',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  };
  const bardata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };
  const [marker, setMarker]=useState([50, -0.09])
  const [marker2, setMarker2]=useState([30, -0.09]) 
  const a=[17.385044, 78.486671]
  const b=[12.971599, 77.594563]
  const[ html, setHtml ]=useState(``);
  useEffect(()=>{ 
    let tg=`<!DOCTYPE html>
      <html>
         <head>
            <title>Leaflet Multi Polylines</title>
            <link rel = "stylesheet" href = "http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css"/>
            <script src = "http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
         </head>
         
         <body>
            <div id = "map" style = "width: 100%; height: 100vh;"></div>
            <script>
               // Creating map options
               var mapOptions = {
                  center: [16.506174, 80.648015],
                  zoom: 7
               }
               // Creating a map object
               var map = new L.map('map', mapOptions);
               
               // Creating a Layer object
               var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
               
               // Adding layer to the map
               map.addLayer(layer);
               
               // Creating latlng object
               var latlang = [
                  [[17.385044, 78.486671], [16.506174, 80.648015], [17.686816, 83.218482]],
                  [[13.082680, 80.270718], [12.971599, 77.594563],[15.828126, 78.037279]]
               ];
               
               // Creating poly line options
               var multiPolyLineOptions = {color:'red'};
               
               // Creating multi poly-lines
               var multipolyline = L.multiPolyline(latlang , multiPolyLineOptions);
               
               // Adding multi poly-line to map
               multipolyline.addTo(map);
               var marker = new L.Marker([`+a+`]);   
               marker.bindPopup("test").openPopup();
              marker.addTo(map);
              var marker2 = new L.Marker([`+b+`]);
              marker2.bindPopup("test").openPopup();
              marker2.addTo(map);
            </script>
         </body>
         
      </html>
      `
        setHtml(tg)
  },[])
  return (
    <View style={[style.bg]}>
      <ScrollView style={style.top}>
        <Text style={[style.shadedwhite, style.bold]}>{'<'}Trips</Text>

        <View style={{height:windowHeight-100, borderRadius:40,  overflow:'hidden'}}>
          <View style={{backgroundColor: '#151515', margin:20,marginTop:50, position:'absolute' , zIndex: 1, width:'90%', borderRadius:10,padding:10}}>
            <View>
              <Text style={style.white}>Grafton westborough</Text>
              <Text style={style.white}>Mon, 6 Jun - 10:20 am - 55min</Text>
            </View>
            <Text style={style.white}>4.1 miles</Text>
          </View>
          <WebView source={{html: html}} style={{height: windowHeight-100, margin:10, borderRadius:50}} />
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
}
