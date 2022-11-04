const express = require("express");
const authMiddleware = require("./auth-middleware");
const firebase = require("./firebase/config");
const app = express();
const db = firebase.firestore();
app.use(express.json())
app.post("/register", function (req, res, next) {
  // res.send("here")
  var email = "abc@email.com";
  var password = "test@123";

  firebase
    .auth()
    .createUser({
      email: email,
      password: password,
      displayName: email,
    })
    .then((rsl) => {
      console.log("reslt==>" + JSON.stringify(rsl));
      res.send(rsl);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

//Function sample
async function read(coll, doc){
  const users = await db.collection(coll).doc(doc).get(); 
  return users;
}

app.post("/getdata", async (req, res) => {
  
  //JSON Sample - Request
  // {
  //   age:47,
  //   data:{
  //     addrs:"one",
  //     details:{}
  //     arra:[
  //       "zero","one","three"
  //     ]
  //   }
  // }

  //Data read from Request
  // let age=request.body.data.arra[2];

  //Use of request directly in call
  // await db.collection("newcoll").doc('newdoc').set({
  //   first: 'Vanessa',
  //   last: 'Peluso',
  //   address: '49 Main St., Tampa, FL',
  //   birthday: '11/30/1977',
  //   age: request.body.age,
  //   homeadds:{
  //     adds1:"value",
  //   }
  //  });
   
  let StartLocation=req.body.StartLocation;  
  const users=read("collname","docname");//Function Call
  res.json({"collectiondata":users, parameter:StartLocation});
});

app.get("/update",async (req, res) => {
  const liam = await
 db.collection('newcoll').doc('newdoc').update({
   'favorites.item': 'Test Data'
 });
res.send("Success")
})


app.get("/delete",async (req, res) => {
  const liam = await
 db.collection('users').doc('trip_1').delete()
res.send("Success")
})


app.get("/getdatawhere", async (req, res) => {
  // const collectionData = db.collection("abc@gmail.com").get();
  // const singleDoc = db.collection("abc@gmail.com").doc("trip_1").get();
  const users = await db.collection("newcoll").where("age",'>',"0").get();
  
  // const liam = db.collection('users').doc('newdoc');

// const observer = liam.onSnapshot(snapshot => {
//  console.log(`changes: ${JSON.stringify(snapshot)}`);
// }, err => {
//  console.log(`Error: ${err}`);
// });

   
  res.send(JSON.stringify(users) + "");

  {
    age:47,
    data:{
      addrs:"one",
      arra:[
        "zero","one","three"
      ]
    }
  }

  let age=request.body.data.arra[2];
  await db.collection("newcoll").doc('newdoc').set({
    first: 'Vanessa',
    last: 'Peluso',
    address: '49 Main St., Tampa, FL',
    birthday: '11/30/1977',
    age: request.body.age,
    homeadds:{
      adds1:"value",
    }
   });
  res.send("test")
});

app.get("/insert", async (req, res) => {
  const users = await db
    .collection("abc@email.com")
    .doc("trip_1").collection("newcoll").doc("trip_1")
    .set({"sampledata":"sampledata", "lat":"10", "long":"50"});
  res.send(JSON.stringify(users) + "");
});

// app.post("/getdata", authMiddleware, async (req, res) => {
//   const users = await db.collection("users").doc("trip_1").get();
//   res.send(JSON.stringify(users) + "");
// });

app.listen(4000, () => console.log("The server is running at PORT 4000"));
