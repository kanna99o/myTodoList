'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mytodolist', function(err){
  if(err){
    console.log('there was an error connecting to Mongo!');
  }else{
    console.log('successfully connected to Mongo!');
  }

});
