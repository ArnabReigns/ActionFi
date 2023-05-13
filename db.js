const mongoose = require("mongoose");

url = 'mongodb+srv://Arnab:12345@actionfi.cmg8vhv.mongodb.net/actionfi?retryWrites=true&w=majority'

mongoose.connect(url).then(()=>{
    console.log("DB connected")
  },(err)=>{
    console.log(err)
});

