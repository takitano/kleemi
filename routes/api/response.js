/**
 * HEAD METHOD
 * @author Takeshi Iri
 */
var util = require('util');
var statusCode = require('./statuscode');
var js2xmlparser = require("js2xmlparser");

module.exports = function (req, res, next) {
    'use strict';

    if (res.result !== undefined) {

        res.result.method = req.method;
        res.result.statusCode = req.statusCode;
        res.result.startTime = req._startTime.toISOString();
        statusCode(undefined, req, res, next);

        if (typeof req.body === 'object' && Object.keys(req.body).length > 0) {
            res.result.body = req.body;
        }

        if (typeof req.query === 'object' && Object.keys(req.query).length > 0) {
            res.result.query = req.query;
        }
        if (req.query.format !== undefined && req.query.format == 'xml') {
            res.writeHead(req.statusCode, {
                'Content-Type' : 'application/xml',
                "Access-Control-Allow-Origin" : "*"
            });
            res.write(js2xmlparser("response", res.result));
            res.end();
        } else {
            res.writeHead(req.statusCode, {
                'Content-Type' : 'application/json',
                "Access-Control-Allow-Origin" : "*"
            });
            res.write(JSON.stringify(res.result));

            res.end();
        }

    } else {
        res.writeHead(req.statusCode, {
            'Content-Type' : 'application/json',
            "Access-Control-Allow-Origin" : "*"
        });
        res.end();
    }
};