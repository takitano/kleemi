/* 
	HEAD METHOD 
*/
var models  = require('../../models');
var util  = require('util');

module.exports = function(req, res, next) {
	try{
		//	verify is model exist or not
		if(typeof models[req.params.model] == 'undefined')
			throw('unexist model');
			
		next();
	}
	catch(err){
		next(err)
	}
};
