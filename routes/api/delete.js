/*
DELETE METHOD
 */
var models = require('../../models');
var util = require('util');
var verif = require('./verification');

module.exports = function (req, res, next) {
    'use strict';
    try {
        if (req.method === 'DELETE') {

            models[req.params.model].findById(req.params.id).then(function (o) {
                if (o === null) {
                    throw('item not exists');
                }

                o.destroy().then(function (oDeleted) {
                    res.result = {
                        success : true,
                        id : o.id
                    };
                    next();
                }).catch (function (error) {
                    next(error);
                });

            }).catch (function (error) {
                next(error);
            });
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
};