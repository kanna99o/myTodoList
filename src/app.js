'use strict';

var express = require('express');
var index = require('./api/index.js');

var app = express();
require('./database');


app.use('/', express.static('public'));

app.use('/api', index);

app.listen('3000',function(){
  console.log("server is running on port 3000");
});
