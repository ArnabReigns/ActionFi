const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String, 
    email: String, 
    password: String,  
});

const adminUserSchema = new mongoose.Schema({
    username: String,
    password: String, 
    roles: [],
    permissions: [],
});

module.exports = {
    User: mongoose.model("User", userSchema), 
    Admin: mongoose.model("Admin", adminUserSchema), 
}