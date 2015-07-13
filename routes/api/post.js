/**
 * POST METHOD
 */
var models = require('../../models');
var util = require('util');
var verif = require('./verification');

module.exports = {
    updateItem : function (req, res, next) {
        'use strict';
        try {
            if (req.method === 'POST') {

                // initilize id of req.body id different than req.param
                if (req.body.hasOwnProperty('id') && req.params.id !== req.body.id) {
                    req.body.id = req.params.id;
                }

                // Vérify if element exists on table
                models[req.params.model].findById(req.params.id).then(function (o) {
                    if (o === null) {
                        throw('item not exists');
                    }
                    // update element
                    o.update(req.body).then(function (oUpdated) {
                        res.result = {
                            success : true,
                            item : oUpdated
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
    },

    createItem : function (req, res, next) {
        "use strict";
        try {
            if (req.method === 'POST') {
                delete(req.body.id);
                models[req.params.model].create(req.body).then(function (oCreated) {
                    res.result = {
                        success : true,
                        item : oCreated
                    };
                    next();
                }).catch (function (error) {
                    next(error);
                });
            } else {
                next();
            }
        } catch (err) {
            next(err);
        }
    }
};