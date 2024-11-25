const express = require('express');
const app = express();
// model exported now we can perform create read update delete
const userModel = require('./userModel');
app.get("/",(req, res)=>{
  res.send("hey");
  
})
app.get("/create",(req, res)=>{
  userModel.create({
    name : "john",
    email : "john@gmail.com",
    username : "john123"
  })
  // yeh(userModel wla) hamra ek asynchronous operation hai mtlb ish line k baad ka code phle chl jayega
  
})
app.listen("3000")