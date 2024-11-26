const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser());
app.get("/", (req, res)=>{
  res.cookie("name", "john");//cookie aese send krte hai
  // what is cookie? -> server se broweser pe kuch data store kra dena that is cookie
  res.send("done");

})

app.get("/read",(req, res)=>{
  // console.log(req.cookies);
  //to use req.cookies we should install a package cookie-parser and then include a middleware app.use(cookieParser());
  res.send("read files")
})
app.listen('7000');