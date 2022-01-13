const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
    fullName: {
        type: String,
    },
    email: {
        type: String,

    },
    password: {
        type: String,

    },
    saltSecret: String
});

mongoose.model('User', userSchema);
