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
router.post('/todos', function(request, response){
  var todo = request.body;
  Todo.create(todo, function(error, todo){
    if(error){
      return response.status(500).json({message: error.message});
    }
    response.json({todo: todo, message: 'todo created'});
  });
});
// TODO: Add PUT route to update existing entries

router.put('/todos/:id', function(request, response){
  var todo = request.body;
  var id = request.params.id;

  if (todo && id != todo._id){
    return response.status(500).json({message: "Id's don't match"});
  }
  Todo.findByIdAndUpdate(id, todo, {new: true}, function(error, todo){
    if(error){
      return response.status(500).json({message: error.message});
    }
    response.json({todo: todo, message: 'Todo Updated'});
  });
});
// TODO: Add DELETE route to delete entries

module.exports = router;
