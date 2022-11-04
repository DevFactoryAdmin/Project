// adding your firebase config here

import firebase from 'firebase/app';
import 'firebase/analytics';
const firebaseConfig = {
    apiKey: "AIzaSyDiPI01b8gO5KQoCnK-c-g9CzhKs_JYyqE",
    authDomain: "testproject-fb29c.firebaseapp.com",
    databaseURL: "https://testproject-fb29c-default-rtdb.firebaseio.com",
    projectId: "testproject-fb29c",
    storageBucket: "testproject-fb29c.appspot.com",
    messagingSenderId: "345303961659",
    appId: "1:345303961659:web:f3053591ea4c92da1e4c1e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
