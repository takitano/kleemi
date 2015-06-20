/* 
	HEAD METHOD 
*/
module.exports = function(req, res, next) {

	if(req.method =='HEAD'){
		res.send('HEAD '+req.params.model+' '+req.params.id);
	}
	else next();
	
};
