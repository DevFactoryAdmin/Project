const express = require("express"); //
const authMiddleware = require("./auth-middleware");
const firebase = require("./firebase/config");
const app = express(); //
const db = firebase.firestore();
app.use(express.json()); //for reading json request

app.get("/insertnew", async (req, res) => {
  const citiesRef = db.collection("cities");

  await citiesRef.doc("SF").collection("landmarks").doc().set({
    name: "Golden Gate Bridge",
    type: "bridge",
  });
  await citiesRef.doc("SF").collection("landmarks").doc().set({
    name: "Legion of Honor",
    type: "museum",
  });
  await citiesRef.doc("LA").collection("landmarks").doc().set({
    name: "Griffith Park",
    type: "park",
  });
  await citiesRef.doc("LA").collection("landmarks").doc().set({
    name: "The Getty",
    type: "museum",
  });
  await citiesRef.doc("DC").collection("landmarks").doc().set({
    name: "Lincoln Memorial",
    type: "memorial",
  });
  await citiesRef.doc("DC").collection("landmarks").doc().set({
    name: "National Air and Space Museum",
    type: "museum",
  });
  await citiesRef.doc("TOK").collection("landmarks").doc().set({
    name: "Ueno Park",
    type: "park",
  });
  await citiesRef.doc("TOK").collection("landmarks").doc().set({
    name: "National Museum of Nature and Science",
    type: "museum",
  });
  await citiesRef.doc("BJ").collection("landmarks").doc().set({
    name: "Jingshan Park",
    type: "park",
  });
  await citiesRef.doc("BJ").collection("landmarks").doc().set({
    name: "Beijing Ancient Observatory",
    type: "museum",
  });
});

app.get("/getdatanew", async (req, res) => {
  var r = "";
  const querySnapshot = await db
    .collectionGroup("landmarks")
    .where("type", "==", "museum")
    .get();
  querySnapshot.forEach((doc) => {
    r += doc.id + " => " + JSON.stringify(doc.data());
  });
  res.send(r);
});
app.post("/getdata", async (req, res) => {
  console.log(req.body);
  let coll = req.body.collection;
  let doc = req.body.document;
  const users = await db.collection(coll).doc(doc).get();
  res.send(JSON.stringify(users) + "");
});
app.get("/newread", async (req, res) => {
  const citiesRef = await db
    .doc("sample/TOK")
    .collection("test")
    .doc("test")
    .get();
  // const snapshot = await citiesRef.where("test/capital", "==", true).get().then((r)=>{
  //   const l=r.docs;
  //   res.send(l)
  // })
  res.send(citiesRef);
});
app.get("/read", async (req, res) => {
  const citiesRef = db.collection("sample");
  const snapshot = await citiesRef.where("capital", "==", true).get();
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  var r = "";
  snapshot.forEach(async (doc) => {
    r += doc.id + "=>" + JSON.stringify(doc.data());
    if (doc.id == "TOK") {
      console.log("Here");
      r = await citiesRef.doc("TOK").get();
    }
  });
  //  let  r= await citiesRef.get("sample").doc("")

  res.send("Success=>" + JSON.stringify(r));
});
app.get("/insert", async (req, res) => {
  const coll = db.collection("sample");
  // coll.doc("SF").set({
  //   name: "San Francisco",
  //   state: "CA",
  //   country: "USA",
  //   capital: false,
  //   population: 860000,
  //   regions: ["west_coast", "norcal"],
  // });
  await coll.doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA",
    capital: false,
    population: 3900000,
    regions: ["west_coast", "socal"],
  });
  await coll.doc("DC").set({
    name: "Washington, D.C.",
    state: null,
    country: "USA",
    capital: true,
    population: 680000,
    regions: ["east_coast"],
  });
  await coll.doc("TOK").set({
    name: "Tokyo",
    state: null,
    country: "Japan",
    capital: true,
    population: 9000000,
    regions: ["kanto", "honshu"],
  });
  await coll.doc("BJ").set({
    name: "Beijing",
    state: null,
    country: "China",
    capital: true,
    population: 21500000,
    regions: ["jingjinji", "hebei"],
  });
  res.send("Success");
});
app.listen(4000, () => console.log("The server is running at PORT 4000")); //
