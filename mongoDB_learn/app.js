const express = require('express');
const app = express();
// model exported now we can perform create read update delete
const userModel = require('./userModel');
app.get("/",(req, res)=>{
  res.send("hey");
  
})
app.get("/create", async(req, res)=>{
  let createdUser =  await userModel.create({
    name : "john",
    email : "john@gmail.com",
    username : "john123"
  })
  // yeh(userModel wla) hamra ek asynchronous operation hai mtlb ish line k baad ka code phle chl jayega toh isko synchronous bnane k liye hm async 
  // await keyword ka use karte hai
  res.send(createdUser);
  
})

app.get("/update" , async(req, res)=>{
  let updatedUser = await userModel.findOneAndUpdate({username: "john123"},{name:"sohn"},{new : true})
  res.send(updatedUser);
})
// yeh saare users read krta hai
app.get('/read', async(req, res)=>{
  let users = await userModel.find()
  // find() hamra hr bar ek array deta hai
  // if use findOne instead of find() then it will show blank screen instead of empty array.
  // findOne hamesha hme phla user dega
  res.send(users);
})
// if want to read specific user then pass username in find and it reads the specific user

app.get('/delete', async(req, res)=>{
  let deletedUser = await userModel.findOneAndDelete({username : "john123"});
  res.send(deletedUser);
  // so delete krne k baad ek baar hme user ka access milta joh ki issh variable me store hai
})


app.listen("4000")