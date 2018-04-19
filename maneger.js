const http = require('http');
const port = 310;
const server = http.createServer((req,res) => {
	res.StatusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('HeelowWord');

});

server.listen(port,() =>{ 
	console.log('server running at  http://localhost:'+port);

});

server.on('listening',function(){
    console.log('ok, server is running');
});

function homeRoute(req,res){
	if(req.url==='/'){
		res.StatusCode=200;
		res.setHeader('Content-Type','text/plain');
		res.end('Set homeRoute \n')
	}

}