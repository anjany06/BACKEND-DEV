const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/dataAssociate");

const userSchema = mongoose.Schema({
  username : String,
  email : String,
  age : Number,
  posts : [{
    type : mongoose.Schema.Types.ObjectId,//ise hm bta rha hai ki iski type object ki ek id hai
    // ya frr iska type ek id hai
    ref : 'posts'// iska mtlb joh uper ids ayengi woh is post model se belong krengi
  }],
})

module.exports = mongoose.model('user', userSchema);



