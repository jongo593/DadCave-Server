'use strict';

module.exports = {
    cluster: {
        workers: 3 //Dedicated CPUs
    },
    express: {
        host: 'localhost',
        port: 3000,
        options: undefined
    },
    mongo: {
        uri: 'mongodb://127.0.0.1:27017/DadCave',
        options: undefined // {}
    },
    authentication: {
        secret: 'JonRocks'
    }
};