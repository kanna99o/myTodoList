'use strict';

var express = require('express');
var index = require('./api/index.js');
var parser = require('body-parser');

var app = express();
require('./database');
require('./seed');


app.use('/', express.static('public'));

app.use(parser.json());

app.use('/api', index);

app.listen('3000',function(){
  console.log("server is running on port 3000");
});
