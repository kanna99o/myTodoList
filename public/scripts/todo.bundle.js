webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//'use strict';

	var angular = __webpack_require__(1);

	angular.module("todoListApp", []);

	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	//'use strict';

	var angular = __webpack_require__(1);

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
	    if (todo._id){
	      dataService.deleteTodo(todo)
	    };
	    $scope.todos.splice($index,1);
	  };

	  $scope.saveTodos = function(){
	    var filteredEditedTodos = $scope.todos.filter(function(todo){
	      if(todo.edited){
	        return todo;
	      }
	    });

	    dataService.saveTodos(filteredEditedTodos)
	    .finally($scope.resetTodoState());
	  };

	//Después de guardar Todos nuevos o editados, propiedad todo.edited debe ser reseteada
	  $scope.resetTodoState = function(){
	    $scope.todos.forEach(function(todo){
	      todo.edited = false;
	    });
	  };

	  $scope.addTodo = function(){
	    var todo = { name : "This a new todo." };
	    $scope.todos.unshift(todo);
	  }

	});


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	//'use strict';

	var angular = __webpack_require__(1);

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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	//'use strict';

	var angular = __webpack_require__(1);


	angular.module('todoListApp')
	.directive('todos', function(){
	  return {
	    templateUrl: 'templates/todos.html',
	    controller: 'mainCtrl',
	    replace: true
	  }
	});


/***/ }
]);