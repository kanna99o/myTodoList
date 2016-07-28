'use strict';

var Todo = require('./models/todo');

var todos = [
  'echar cacha',
  'correrse la paja',
  'echar un barro',
  'chupar choro',
  'romper himen'];

todos.forEach(function(todo, index){
  Todo.find({name: todo}, function(error, todos){
    if(!error && !todos.length){
      Todo.create({completed: false, name: todo});
    }
  });

});
