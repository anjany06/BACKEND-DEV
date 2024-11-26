const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use()
app.get("/", function(req, res){

})
app.listen(7000);