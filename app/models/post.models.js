const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _ = require('lodash');

const postSchema = new Schema({
    title: {type: String, required: true},
    topic: {type: String, required: true},
    author: {type: String, required: true},
    body: {type: String, required: true},
    assets: [{assetType: String, enum: ['Image', 'Video', 'Sound'], data: {name: String, url: String}}],
    date: {type: Date, default: Date.now},
    votes: {type: Number, default: 0},
    isComment: {type: Boolean, default: false}
});

postSchema.add({comments: [postSchema]});

postSchema.statics.isValid = function (body) {
    return _.has(body, 'title') &&
           _.has(body, 'topic') &&
           _.has(body, 'author') &&
           _.has(body, 'body')

};

module.exports = postSchema;