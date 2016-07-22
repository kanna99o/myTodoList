'use strict';

var express = require ('express');
var todos = require('../../public/mock/todos.json');

var router = express.Router();

router.get('/todos', function(request, response){
  response.json({todos: todos});
});

// TODO: Add POST route to create new entries

// TODO: Add PUT route to update existing entries

// TODO: Add DELETE route to delete entries

module.exports = router;
