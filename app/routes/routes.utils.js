const _ = require('lodash');

module.exports = {
    responseWrapper: function (body, error) {
        if(!error) {
            return {result: body, error: false}
        } else {
            return {result: null, error: error}
        }
    }
};