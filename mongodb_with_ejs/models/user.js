const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testapp");

const userSchema = mongoose.Schema({
  image : String, // image me hm url likne wale joh ki hmara string hota hai
  email : String,
  name : String,
})

module.exports = mongoose.model("user", userSchema);
