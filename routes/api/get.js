/*jslint todo: true*/
/*
GET METHOD
@todo :
-verifier que le model existe
-la pagination
-filtre
-le trie
-faire une reponse générique.
-si table n'existe pas alors => view
-si .model => affichier le model
 */
var models = require('../../models');
var util = require('util');
var verif = require('./verification');

module.exports = {

    getItem : function (req, res, next) {
        'use strict';
        try {
            if (req.method === 'GET') {

                models[req.params.model].findById(req.params.id).then(function (o) {
                    if (o === null) {
                        throw('item not exists');
                    }
                    res.result = o.dataValues;
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
    },

    getCollection : function (req, res, next) {
        'use strict';
        try {
            if (req.method === 'GET') {

                models[req.params.model].findAndCountAll().then(function (o) {
                    res.result = {
                        data : o.rows,
                        total : o.count
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