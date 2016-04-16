'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _ = require('lodash');
const q = require('q');

const UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, default: mongoose.Types.ObjectId()},
    userRole: {type: String, enum: ['SUPER_ADMIN', 'ADMIN', 'USER'], default: 'USER'}
});

UserSchema.statics.parseError = (error) => {

    switch (error.code) {
        case 11000:
            return 'That username already exists';
            break;
        default:
            return 'Unknown Error';
            break;
    }

};

module.exports = UserSchema;