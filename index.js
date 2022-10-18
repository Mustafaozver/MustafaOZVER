(()=>{
	const express = require("express");
	const Http = require("http");
	const APP = express();
	APP.use("/", express.static(__dirname, {index:"index.html"}));
	APP.use("/", require("serve-index")(__dirname));
	const HTTP = Http.createServer(APP);
	HTTP.listen(8085,()=>{
		console.log("Service web running...");
	});
})();