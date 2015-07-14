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
				// if model exists
                if (models[req.params.model] !== undefined) {
                models[req.params.model].findById(req.params.id).then(function (o) {
                    if (o === null) {
                        throw new Error(404);
                    }
                    res.result = o.dataValues;
                    req.statusCode = 200;
                    next();
                }).catch (function (error) {
                    throw new Error(404);
                });
				}
				else{
                    models.sequelize.query("SELECT count(1) as total FROM `" + req.params.model + "` WHERE id=:id", {
                        type : models.sequelize.QueryTypes.SELECT,
						replacements:{id:req.params.id}
                    }).spread(function (total, metadata) {
						if(total.total !==1)
							throw new Error(404);
							
                        models.sequelize.query("SELECT * FROM `" + req.params.model + "` WHERE id=:id",{type : models.sequelize.QueryTypes.SELECT,
						replacements:{id:req.params.id}}).spread(function (results, metadata) {
                            res.result = {
                                data : results,
                                total : total.total
                            };
                            req.statusCode = 200;
                            next();
                        }).catch (function (err) {
                            throw new Error(404);
                        });
                    }).catch (function (err) {
                        next(err);
                    });				
				}
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
				// if model exists
                if (models[req.params.model] !== undefined) {
                    models[req.params.model].findAndCountAll().then(function (o) {
                        res.result = {
                            data : o.rows,
                            total : o.count
                        };
                        req.statusCode = 200;
                        next();
                    }).catch (function (err) {
                        throw new Error(404);
                    });
					
				// if view exists
                } else {
                    models.sequelize.query("SELECT count(1) as total FROM `" + req.params.model + "`", {
                        type : models.sequelize.QueryTypes.SELECT
                    }).spread(function (total, metadata) {
                        models.sequelize.query("SELECT * FROM `" + req.params.model + "`").spread(function (results, metadata) {
                            res.result = {
                                data : results,
                                total : total.total
                            };
                            req.statusCode = 200;
                            next();
                        }).catch (function (err) {
                            throw new Error(404);
                        });
                    }).catch (function (err) {
                        throw new Error(404);
                    });
                }
            } else {
                next();
            }
        } catch (err) {
            next(err);
        }
    }
};
