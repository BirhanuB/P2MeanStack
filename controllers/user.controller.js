const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    console.log('Inside register function');
}
