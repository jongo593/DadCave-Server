'use strict';
const routeUtils = require('../routes.utils');
const _ = require('lodash');

module.exports = function Post (app, engine) {
    const models = engine.models;

    app.post('/post', function (req, res) {
        if(_.has(req, 'body')) {
            if(models.Post.isValid(req.body)) {
                console.log('valid')
                engine.models.Post.create(req.body).then((post) => {
                    console.log(post);
                    res.send(routeUtils.responseWrapper(post, false));
                }, function (err) {
                    res.send(routeUtils.responseWrapper(null, err));
                });
            } else {
                res.send(routeUtils.responseWrapper(null, 'Invalid Body'));
            }
        } else {
            res.send(routeUtils.responseWrapper(null, 'No Body'));

        }
    });
};