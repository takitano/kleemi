/**
 * HEAD METHOD
 * @author Takeshi Iri
 */
var models = require('../../models');
var util = require('util');
var verif = require('./verification');

module.exports = function (req, res, next) {
    'use strict';
    try {
        if (req.method === 'HEAD') {

            if (req.params.id !== undefined) {
                throw(500);
            }

            res.result = {};
            next();
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
};