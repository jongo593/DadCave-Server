'use strict';

const q = require('q');

const mongoose = require('mongoose');

module.exports = function mongoInit (config) {

    let deferred = q.defer();

    let configMongo = config.mongo;

    if(mongoose.connection.readyState) {

        deferred.resolve(mongoose.connection);

    } else {
        mongoose.connect(configMongo.uri, function (error) {
            if(error) {

                deferred.reject(error);

            } else {

                deferred.resolve(mongoose.connection);

            }

        });

    }

    return deferred.promise;

};