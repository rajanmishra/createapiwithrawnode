var http = require('http');
	var qs = require('querystring');


// basic handler to close down all normal HTTP requests
	function handler (req, res) {
		console.log(req.method);


		if(req.url=='/scheduleAuction') {
			var body = '';
			
			if(req.method=='POST'){
				req.on('data', function (data) {
	            			body += data;
		            	if (body.length > 1e6)
		                	req.connection.destroy();
	        		});

				req.on('end', function () {
	    				var post = qs.parse(body);
	    				res.writeHead(200, {"Content-Type": "application/json"});
	    				res.end( JSON.stringify({"success":true,"data":post}));
	  			});
			}
			
			
			
			if(req.method=='GET'){
				req.on('data', function (data) {
	            			body += data;
		            	if (body.length > 1e6)
		                	req.connection.destroy();
	        		});

				req.on('end', function () {
	    				var post = qs.parse(body);
	    				res.writeHead(200, {"Content-Type": "application/json"});
	    				res.end( JSON.stringify({"success":true,"data":post}));
	  			});
			}
			
			
			if(req.method=='DELETE'){
				req.on('data', function (data) {
	            			body += data;
		            	if (body.length > 1e6)
		                	req.connection.destroy();
	        		});

				req.on('end', function () {
	    				var post = qs.parse(body);
	    				res.writeHead(200, {"Content-Type": "application/json"});
	    				res.end( JSON.stringify({"success":true,"data":post}));
	  			});
			}
			
			
			if(req.method=='PUT'){
				req.on('data', function (data) {
	            			body += data;
		            	if (body.length > 1e6)
		                	req.connection.destroy();
	        		});

				req.on('end', function () {
	    				var post = qs.parse(body);
	    				res.writeHead(200, {"Content-Type": "application/json"});
	    				res.end( JSON.stringify({"success":true,"data":post}));
	  			});
			}

			
		}else{
				res.writeHead(404, {"Content-Type": "application/json"});
				res.end( JSON.stringify({"success":false}));
		}
		
	}
var apphttp = http.createServer(handler);
apphttp.listen(port);
	
