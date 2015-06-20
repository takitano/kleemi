/* 
	GET METHOD 
*/
module.exports = function(req, res, next) {
	if(req.method =='GET'){
		//throw new Error('something bad happened');
		res.send('GET '+req.params.model+' '+req.params.id);
	}
	else next();
	
};
