const Post = require('./Post/post.routes');

module.exports = function (expressApp, engine) {
    Post(expressApp, engine);
    require('./User/user.routes')(expressApp, engine);
};