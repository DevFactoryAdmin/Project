
const firebase = require("firebase-admin");
// const firebase=require("firebase") 

const credentials = require("../serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
  databaseURL: "https://testproject-fb29c.firebaseio.com",
}); 

module.exports = firebase;