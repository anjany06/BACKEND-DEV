const express = require('express')
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/",(req, res)=>{
  res.render("index");
})
app.get("/profile", isLoggedIn, (req, res)=>{
  res.send("hello");
  console.log(req.user);
})
app.get("/login", (req, res)=>{
  res.render("login");
})
app.post("/register", async(req, res)=>{
  let {name, username, password, email, age} = req.body;
  let user = await userModel.findOne({email});
  if(user) return res.status(500).send("User already registered");

  bcrypt.genSalt(10, (err ,salt)=>{
    bcrypt.hash(password, salt, async(err, hash)=>{
      let createdUser = await userModel.create({
        name,
        username,
        password: hash,
        email,
        age,

    })
   let token = jwt.sign({email: email, userId: user._id}, "secret")
   res.cookie("token", token);
   res.send("registered");
  })
  })
})
app.post("/login", async(req, res)=>{
  let {email, password} = req.body;
  let user = await userModel.findOne({email});
  if(!user) return res.status(500).send("Something went wrong");

  bcrypt.compare(password, user.password, function(err, result){
    if(result){ 
      let token = jwt.sign({email: email, userId : user._id}, "secret")
      res.cookie("token", token);
      res.status(200).send("You can login")
     }
   else res.redirect("/login");

  })
  })

app.get("/logout", (req, res)=>{
  res.cookie("token","");
  res.redirect("/login");
})

// middleware for protected routes
//like yeh check krega ki user loggedin hai ki ni ager loggedin hoga tabhi woh profile open kr skta hai
function isLoggedIn(req, res, next){
  if(req.cookies.token === "") res.send("You must be logged in");
  else{
    let data = jwt.verify(req.cookies.token, "secret");
    req.user = data;
    next();
  }
}
app.listen(3000);