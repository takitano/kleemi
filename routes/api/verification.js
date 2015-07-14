/**
 * HEAD METHOD
 * @author Takeshi Iri
 */
var models = require('../../models');
var util = require('util');

module.exports =  function (req, res, next) {
    "use strict";
    try {
        //	verify is model exist or not
        //	dont filter for get method because database views could be used
        if (models[req.params.model] === undefined && req.method !== 'GET') {
            throw new Error(404);
        }
        next();
    } catch (err) {
        next(err);
    }
};