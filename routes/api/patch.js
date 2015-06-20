/* 
	PATCH METHOD 
*/
module.exports = function(req, res, next) {

	if(req.method =='PATCH'){
		res.send('PATCH '+req.params.model+' '+req.params.id);
	}
	else next();
	
};
