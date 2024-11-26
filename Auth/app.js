const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// bcrypt hme 2 things krke deta hai phla encryption dussra decryption


app.use(cookieParser());
// app.get("/", (req, res)=>{
//   res.cookie("name", "john");//cookie aese send krte hai
  // what is cookie? -> server se broweser pe kuch data store kra dena that is cookie
//   res.send("done");

// })

// app.get("/read",(req, res)=>{
  // console.log(req.cookies);
  //to use req.cookies we should install a package cookie-parser and then include a middleware app.use(cookieParser());
//   res.send("read files")
// })

//bcrypt for encryption
// app.get("/",function(req, res){
//   bcrypt.genSalt(10, function(err, salt){
    // console.log(salt);
    // bcrypt.hash("password", salt, function(err, hash){
    //   console.log(hash);
    //   res.send(hash);

//     })
//   })
// })

// using bcrypt for decryption
// app.get("/", function(req, res){
//   bcrypt.compare("password", "$2b$10$h7Xy3JxkAaJEudf1ESC1J.2GF2jePAHLzZybymJLoJWCUYZZ9trB.", function(err, result){
//     console.log(result);
//   })

// })

app.get("/", function(req, res){
  let token = jwt.sign({email: 'john@example.com'}, "secret")//ki iss secret ki basis per hmara email(data) encyrpt hota hai
  // means ab yeh email ek long string bn jayega and ager mujhe yeh secret mil jaye toh m kisi ka bhi data read kr skte hai
  console.log(token);
  res.cookie("token", token);
  res.send("done");
  // so yeh joh token(string) aayi h isi ko server browser ko bhejta and yehi hm cookie me store krate hai
})

// how to decrypt (token)data from cookie 
app.get("/read", function(req, res){
  let data = jwt.verify(req.cookies.token, "secret");
  console.log(data);
})
app.listen(7000);