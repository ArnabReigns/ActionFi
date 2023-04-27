const express = require("express");
var cors = require("cors");
const cookieParser = require('cookie-parser');
const { User } = require("./Schemas/UserSchema.js");
const path = require("path");
const { hashPassword,comparePassword } = require("./hashing.js");
require("./db.js");

const app = express();

const corsOptions = {
    origin:true,
    credentials: true,
  };

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname,'frontend','dist')));
    res.sendFile(path.resolve(__dirname,'frontend','dist','index.html'));
});

app.get("/api",(req,res)=>{
    res.send("API GATEWAY");
})

app.post("/api/signup", async (req, res) => {
    var user = req.body;
    if (user.email == null) return res.send("Email is required");
    if (user.name == null) return res.send("Name is required");
    if (user.password == null) return res.send("Password is required");

    var prevUser = await User.findOne({ email: user.email });

    if (prevUser) res.status(406).send("User already exists");
    else {
        var hash = await hashPassword(user.password);
        var user = await new User({
            name: user.name,
            email: user.email,
            password: hash,
        }).save();
        
        res.send(user);
    }
});

app.post("/api/login", async (req, res) => {

    var data = req.body;
    var user = await User.findOne({ email: data.email });

    if(user)
    {
        var authenticated = await comparePassword(data.password,user.password);
        if(authenticated) res.cookie('token',user._id, { maxAge: 1000*60*60*24*30, httpOnly: true }).status(200).send("Logged In");
        else res.send('Wrong Credentials');
    }
    else 
    {
        res.send("Wrong Credentials");
    }

});

app.get('/api/logout', (req,res)=>{
    res.clearCookie("token").send("Logged Out Successfully");
});

app.get("/api/getUser", async (req, res) => {

    var c = req.cookies;
    var user = await User.findOne({ _id: c.token },'-password');
    if(user != null) res.json({loggedin:true, user: user});
    else res.json({loggedin:false});
    
});


app.use('/api/products/', require('./products'))

app.listen(3000, () => {
    console.log("App started at http://localhost:3000");
});
