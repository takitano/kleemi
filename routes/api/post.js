/* 
	POST METHOD 
*/
var models  = require('../../models');
var util  = require('util');
var verif = require('./verification');


module.exports = function(req, res, next) {
	try{
		if(req.method =='POST'){
			console.log(util.inspect(req.query));
			console.log(util.inspect(req.body));
		/*	var task = models[req.params.model].build(req.body).save().then(
			function(o){
				res.result = {success:true};
			}).catch(function(error){
				next(error);
			});
		*/		res.result = {success:true};
			next();
		}else next();
	}
	catch(err){
		next(err)
	}
};
