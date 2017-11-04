const http = require('http'); 
http.createServer(function(req, resp) {
    resp.writeHead(200, {'Content-Type': 'text/html'});
    resp.write('<h1>Het heizel drama</h1>');
    resp.write('<img src="http://www.rizoomes.nl/wp-content/uploads/2014/05/Heizeldrama-verdrukking.jpg"></img>')
    resp.write('<h2>Aanloop</h2>');
    resp.end('<p>Het was een zaterdag in mei 1985.</p>');
}).listen(process.env.PORT || 1337);