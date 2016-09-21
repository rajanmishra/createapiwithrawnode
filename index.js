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
	    				var d = new Date();
	    				console.log(d);
						var n = d.getTime()+30000;
						console.log("<br>"+n);

						var data = {auctionId: "SALESAUCTION_ed927e0f662a9f4404f11486df62bbmb",
						assetId:"fbf62851-82d1-483e-9c1b-963eb8938c86",
						auctionGroup:"db03cd6b-a2a8-4c8e-9bdb-b442c7e2272a",
						duration:60,
						geofence:"",
						geostatus:"INSIDE_OUTSIDE",
						participants:0,
						preRollHasImage:true,
						preRollSeconds:40,preRollVideoUrl:"https://s3-us-west-2.amazonaws.com/assets.dropit.xyz/video/DropitDemoLevis.mp4",startprice:579,
						starttime:n+30000,state:0,tickerTape:"<< Push in to play - hold down for 3 seconds - swipe up to buy <<",
						time:n+30000,title:"hello <br> Auction.."}

	    				drivers.timeQueue.scheduleJobAt("auction", "initAuction", data, n, false);
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
	
