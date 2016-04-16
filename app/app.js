'use strict';

const cluster = require('cluster');
const Engine = require('./engine/engine');
const mongoInit = require('./mongo/init');
const expressApp = require('./express/express');

const _ = require('lodash');


module.exports = function init (config) {

    process.on('uncaughtException', function (error){
        console.error(error.stack);
        process.exit(1);
    });

    if(cluster.isMaster) {


        _.forEach(_.range(config.cluster.workers), function (i) {
            cluster.fork();
        });

        cluster.on('online', (worker) => {
            console.log(worker.id + ' is online');
        });

        cluster.on('exit', (worker, code, signal) => {
            console.log('worker %d died (%s). restarting...',
                worker.process.pid, signal || code);
            cluster.fork();
        });


    } else {


        let engine = new Engine(config);

        engine.setWorker(cluster.worker);

        mongoInit(config).done(function (mongoConnection) {
            engine.setMongo(mongoConnection);
            engine.setModels(require('./models/models'));
            engine.expressApp = new expressApp(engine);

        }, function (err) {
            console.log(err);
        });


    }
}
