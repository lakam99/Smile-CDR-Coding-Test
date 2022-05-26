var express = require('express');
var path = require('path');

var server = express();
server.use(express.static(path.join(__dirname, 'public')));
server.listen(5732, '0.0.0.0', ()=>{
    console.log('Arkam Mazrui server started...');
})