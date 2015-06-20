/* 
	OPTIONS METHOD 
*/
module.exports = function(req, res, next) {

	if(req.method =='OPTIONS'){
		res.send('OPTIONS '+req.params.model+' '+req.params.id);
	}
	else next();
	
};
