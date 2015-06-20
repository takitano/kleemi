/* 
	PUT METHOD 
*/
module.exports = function(req, res, next) {

	if(req.method =='PUT'){
		res.send('PUT '+req.params.model+' '+req.params.id);
	}
	else next();
	
};
