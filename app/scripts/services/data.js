//'use strict';

var angular = require('angular');

angular.module('todoListApp')
.service('dataService', function($http){
  this.helloConsole = function(){
    console.log("this is the data service");
  };

  this.getTodos = function(callback){
    $http.get('/api/todos')
    .then(callback);
  };

  this.deleteTodo = function(todo){
    console.log("the " + todo.name + " todo has been deleted");
  };

  this.saveTodos = function(todos){
    console.log(todos.length + " todos has been saved");
  };

});
