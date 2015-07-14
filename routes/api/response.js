/**
 * HEAD METHOD
 * @author Takeshi Iri
 */
var util = require('util');
var statusCode = require('./statuscode');

    module.exports = function (req, res, next) {
    'use strict';
	
    if (res.result !== undefined) {
	
        res.result.method = req.method;
        res.result.startTime = req._startTime.toISOString();
		statusCode(undefined,req, res, next);
		
        if (typeof req.body !== 'object') {
            res.result.body = req.body;
        }

        if (typeof req.query !== 'object') {
            res.result.query = req.query;
        }
		res.writeHead(req.method, {
			'Content-Type' : 'application/json',
			"Access-Control-Allow-Origin" : "*"
		});
        res.write(JSON.stringify(res.result));
		res.end();
    }

};