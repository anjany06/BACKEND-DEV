const express = require('express');
const app = express();
const path = require('path');
//1. so joh hm sare tasks read krenge woh rkhenge hm files nam k folder me so hme read krenge usme ki kitne tasks hai?
// fs module?
//fs module hamare node js core me avaible hai toh ise hm ek trah se file handling kr skte hai
const fs = require ('fs');// neeche hai iska use
const { log } = require('console');


// yeh neeche two lines hm apne form ko use kr payenge but post form me abhi bhi dikkat hogi
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ish line se hm ejs file me static file(images  vanilla css aur js) ko link kr payega
app.use(express.static(path.join(__dirname, 'public')));
// ise hm bata rhe h ki hamara joh frontend view woh ejs hai
app.set('view engine','ejs');

app.get("/", function(req, res){
  fs.readdir(`./files`, function(err,files){
    // so ager hmara files folder khali hoga toh console.log me ek blank array ayega ager kuch hoga toh file ka name 
    // console.log(files);
    
    // so jb files read ho jaye uske baad hi hamra index render ho isiliye hmne ish neehe wali statement ko is callbackk func k uner likha hai
      res.render("index",{files: files});// so ease hm files ka data index me bhej skte hai files object bna k
  })
})
app.post("/create", function(req, res){
  fs.writeFile(`./files/${req.body.title.split(" ").join("")}.txt`, req.body.details, function(err){
    res.redirect("/");

  });
  // toh .split(" ") se yeh str se ek array me convert ho jaynge jisme elements alg honge whitespace se and .join() se frr se woh string me 
  //convert ho jayenge without whitespaces


  // tooh ise hm title aur body dono ko access kr payenge
  // console.log(req.title);
  // console.log(req.body);

})
//dynamic routing
// app.get("/profile/:username", function(req, res){
//   const name = req.params.username
//   res.send(`welcome ${name}`)
// })
// app.get("/profile/:username/:age/:profes", function(req, res){
//   const name = req.params.username
//   const age = req.params.age
//   const profes = req.params.profes
//   res.send(`welcome ${name} and you are ${age} year old and your profession is ${profes}`)
// })


app.listen(5000, function(){
  console.log("its running")
});

// console.log(__dirname);

