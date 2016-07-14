'use strict';

angular.module('todoListApp')
.service('dataService', function($http){
  this.helloConsole = function(){
    console.log("this is the data service");
  };
  
  this.getTodos = function(callback){
    $http.get('/mock/todos.json')
    .then(callback);
  };
  
  this.deleteTodo = function(todos){
    console.log("the " + todo.name + " todo has been deleted");
  };
  
  this.saveTodos = function(todos){
    console.log(todos.length + " todos has been saved");
  };

});