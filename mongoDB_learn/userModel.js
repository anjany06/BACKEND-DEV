const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

const userSchema = mongoose.Schema({
  name : String,
  username : String,
  email : String
})

module.exports = mongoose.model("user", userSchema);
//user name k pluralise version ka model bnega 
// so hamra model bn chuka aur hm chaye toh crud yehi kr skte hai but hme un sb k liye routes bnayege
//so ab hme separte routes me kaaam krne k liye model ko export krna pdega so use krenge module.exports and exports ek method ni property hai

// important
// mongoose wale code like crud yeh sare hamre asynchronous hote hai