const mongoose = require('mongoose');
module.exports = {
    Post: mongoose.model('Post', require('./post.models')),
    User: mongoose.model('User', require('./User.models'))
};