'use strict';
const routeUtils = require('../routes.utils');
const _ = require('lodash');

module.exports = function UserRoutes (app, engine) {
    const models = engine.models;

    app.post('/user/register', function (req, res) {

        if(req.body) {
            models.User.create(req.body).then((user) => {
                res.send(routeUtils.responseWrapper({ok: true}, false));
            }, (err) => {
                res.send(routeUtils.responseWrapper(models.User.parseError(err)));
            })
        } else {
            res.send(routeUtils.responseWrapper(null, 'No Body'));
        }

    });
};