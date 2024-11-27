const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/posts");

app.get("/", function(req, res){
  res.send("Hello World!");
})

app.get("/create", async function(req, res){
  let user = await userModel.create({
    username : "john",
    age : 25,
    email : "john@gmail.com"
  });

  res.send(user);
})
app.get("/post/create", async function(req, res){
  let post = await postModel.create({
    postdata : "hello how are you",
    user : "67473a53fdd88d657c1ade96"
  })
  // yeh dual side hote hai so user ko bhi batana pdega ki user ne post create krdi hai
  let user = await userModel.findOne({
    _id : "67473a53fdd88d657c1ade96"
  })
  user.posts.push(post._id);
  await user.save();// kyuki hmne hath se change kiya h isiliye hme user.save likhna pdega
  res.send({post, user});
})

app.listen(3000);