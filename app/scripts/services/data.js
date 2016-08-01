//'use strict';

var angular = require('angular');

angular.module('todoListApp')
.service('dataService', function($http, $q){
  this.helloConsole = function(){
    console.log("this is the data service");
  };

  this.getTodos = function(callback){
    $http.get('/api/todos')
    .then(callback);
  };

  this.deleteTodo = function(todo){
    $http.delete('/api/todos/' + todo._id).
    then(function(result){
      console.log("the " + todo.name + " todo has been deleted");
    });
  };

  this.saveTodos = function(todos){
    var queue = [];
    todos.forEach(function(todo){
      var request;
      if(!todo._id){
        request = $http.post('/api/todos', todo);
      } else{
        request = $http.put('/api/todos/'+ todo._id, todo).then(function(result){
          todo = result.data.todo;
        });
      }
      queue.push(request);
    });
    return $q.all(queue).then(function(result){
      console.log("I saved " + todos.length + " todos");
    });
  };

});
