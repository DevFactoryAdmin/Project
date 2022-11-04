const express = require("express");
const firebase = require("./firebase/config");
const app = express();
const db = firebase.firestore();

app.get("/getdata", async (req, res) => {
  const users = await db.collection("abc@email.com").doc("trip_1").get();
  res.send(JSON.stringify(users) + "");
});

app.get("/insert", async (req, res) => {
  const users = await db
    .collection("abc@email.com")
    .doc("trip_1")
    .collection("newcoll")
    .doc("trip_1")
    .set({ sampledata: "sampledata", lat: "10", long: "50" });
  res.send(JSON.stringify(users) + "");
});

app.get("/delete", async (req, res) => {
  const liam = await db.collection("users").doc("trip_1").delete();
  res.send("Success");
});

app.get("/update", async (req, res) => {
  const liam = await db.collection("newcoll").doc("newdoc").update({
    "favorites.item": "Test Data",
  });
  res.send("Success");
});

app.listen(4000, () => console.log("The server is running at PORT 4000"));
