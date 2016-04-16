'use strict';

const express = require('express');
const routes = require('../routes/routes.js');
const q = require('q');
const bodyParser = require('body-parser');
const morgan = require ('morgan');

module.exports = class expressApp {
    constructor (engine) {
        this.host = engine.config.express.host;
        this.port = engine.config.express.port;
        this.options = engine.config.express.options;

        this.initExpress(engine);
    }

    initExpress (engine) {
        this.app = express();
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(bodyParser.json());
        this.app.use(morgan('dev'));
        this.app.set('superSecret', engine.config.authentication.secret); // secret variable

        this.initRoutes(this.app, engine);
        this.app.listen(this.port);
    }

    initRoutes (app, engine) {
        routes(app, engine);
    }

};
