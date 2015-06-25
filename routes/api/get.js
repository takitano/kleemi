/* 
	GET METHOD 
	TODO : 
		-verifier que le model existe
		-la pagination
		-filtre
		-le trie
		-faire une reponse générique.
		-si table n'existe pas alors => view
*/
var models  = require('../../models');
var util  = require('util');

module.exports = {

	getItem : function(req, res, next) {
		if(req.method =='GET'){
				
			models[req.params.model].findById(req.params.id).then(function(o) {
				res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
				res.write(JSON.stringify(o.dataValues));
				res.end();
			}).catch(function(error){
				next(error);
			});
			
		}
		else next();
	},
	
	getCollection : function(req,res,next){
		if(req.method =='GET'){				
			var obj = models[req.params.model].rawAttributes.name;
			console.log(obj);
			models[req.params.model].findAndCountAll().then(function(o) {
				res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
				res.write(JSON.stringify({data:o.rows,total:o.count}));
				res.end();
			}).catch(function(error){
				next(error);
			});
		}
		else next();
	}
	
};
