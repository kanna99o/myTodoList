'use strict';

var express = require ('express');
//var todos = require('../../public/mock/todos.json');
var Todo = require('../models/todo.js');
var router = express.Router();

router.get('/todos', function(request, response){
  Todo.find({}, function(err, todos){
    if(err){
      return response.status(500).json({message: err.message});
    }
    response.json({todos: todos});
  });
});

// TODO: Add POST route to create new entries

// TODO: Add PUT route to update existing entries

// TODO: Add DELETE route to delete entries

module.exports = router;
