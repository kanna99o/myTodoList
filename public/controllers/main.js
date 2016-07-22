'use strict';

angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService){
  $scope.helloWorld = function(){
    console.log("Este es el controlador helloWorld, en el mainCtrl!!");
  };

  $scope.helloConsole = dataService.helloConsole;

  // Since JavaScript is asynchronous, the definition of a variable with a value returned by a function is not posible since
  // those don't happen at the same time, therefore the variable ends up undefined. To solve the problem, the defition must happen in a
  // callback function (when the value to be assigned is already available).
  dataService.getTodos(function(response){
    $scope.todos = response.data.todos;
    console.log(response.data.todos);
  });

  $scope.deleteTodo = function(todo, $index){
    dataService.deleteTodo(todo);
    $scope.todos.splice($index,1);
  };

  $scope.saveTodos = function(){
    var filteredEditedTodos = $scope.todos.filter(function(todo){
      if(todo.edited){
        return todo;
      }
    });

    dataService.saveTodos(filteredEditedTodos);
  }

  $scope.addTodo = function(){
    var todo = { name : "This a new todo." };
    $scope.todos.unshift(todo);
  }

});
