'use strict';

module.exports = class Engine {
    constructor(config) {
        this.worker = undefined;
        this.config = config;
        this.mongo = undefined;
        this.models = undefined;
        this.expressApp = undefined;
        this.kue = undefined;
    }

    setMongo (mongo) {
        this.mongo = mongo;
    }

    getMongo() {
        return this.mongo;
    }

    setModels (models) {
        this.models = models;
    }

    getModels() {
        return this.models;
    }

    setWorker (worker) {
        this.worker = worker;
    }

    getWorker () {
        return this.worker;
    }
};