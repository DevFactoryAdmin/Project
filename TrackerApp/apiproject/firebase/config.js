// Import the functions you need from the SDKs you need
const firebase=require("firebase-admin");
const credentials = require("../serviceAccountKey.json");
require("firebase/auth") 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    credential: firebase.credential.cert(credentials),
    databaseURL: "https://testproject-fb29c.firebaseio.com",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
module.exports=firebase;