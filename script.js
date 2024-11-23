// // const http = require("http");
// const oneLinerJOke = require("one-liner-joke");


// const getRandomJoke = oneLinerJOke.getRandomJoke();
// console.log(getRandomJoke);

// const server = http.createServer(function(req, res){
//   res.end("HEllo world");
// })

// server.listen(5000);
// console.log("hello");
const express = require("express")
const app = express();

// app.use(function(req, res, next){
//   console.log("Middleware ");
//   next();
// })

//middle ware

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/', function(req, res){
  res.send("Hello")
})
app.get('/profile', function(req, res){
  res.send("welcome to profile")
  
});

// app.use((err,req,res,next)=>{
//   console.error(err.stack)
//   res.status(500).send("console error")
// })

app.listen(3000)
