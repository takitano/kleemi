/* 
	POST METHOD 
*/
module.exports = function(req, res, next) {

	if(req.method =='POST'){
		res.send('POST '+req.params.model+' '+req.params.id);
	}
	else next();
	
};
