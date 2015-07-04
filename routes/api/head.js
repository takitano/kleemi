/* 
	HEAD METHOD 
*/
var models  = require('../../models');
var util  = require('util');
var verif = require('./verification');

module.exports = function(req, res, next) {
	try{
		if(req.method =='HEAD'){
		
			if(typeof req.params.id != 'undefined')
				throw('id  is not permitted');
				
			res.result ={};
			next();
		}else next();
	}
	catch(err){
		next(err)
	}
};
