/* 
	DELETE METHOD 
*/
module.exports = function(req, res, next) {

	if(req.method =='DELETE'){
		res.send('DELETE '+req.params.model+' '+req.params.id);
	}
	else next();
	
};
