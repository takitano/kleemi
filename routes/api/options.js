/**
 * OPTIONS METHOD
 * @author Takeshi Iri
 */

 var models = require('../../models');
var util = require('util');
var verif = require('./verification');

module.exports = function (req, res, next) {

    if (req.method == 'OPTIONS') {
		res.header('Allow' , 'GET PUT PATCH POST DELETE OPTIONS' );
		next();
    } else
        next();

};