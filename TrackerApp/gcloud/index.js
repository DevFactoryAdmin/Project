const express=require('express')
const app=express();
app.get("/",(req, res)=>{
    res.send("test")
})
app.listen(8000,()=>{
    console.log("http://localhost:8000")
})