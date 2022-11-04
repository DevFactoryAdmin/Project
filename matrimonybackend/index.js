const express=require('express')
const cors=require('cors')
const mysql=require('mysql')
const app=express();
const PORT=8000
app.use(express.json())
app.use(cors())
const con=mysql.createConnection({
    database: "matrimony"
    , host:"localhost",
    user: 'root'
    , password:'password'
})

con.connect((err)=>{
    if(err)
    console.log(err)
    else
    console.log("connected")
})

app.post('',()=>{})
app.listen(PORT,()=>{
    console.log(`server listening to port${PORT}`)
})