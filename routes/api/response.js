/* 
	HEAD METHOD 
*/
var util  = require('util');

module.exports = function(req, res, next) {
	console.log(util.inspect(res.result,{deph:1}));
	res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
	res.write(JSON.stringify(res.result));
	res.end();

	};
