(function(){
    angular.module('MEANTodos') //getter syntax;
    .controller('TodoController', TodoController);

  TodoController.$inject = ['$scope', 'TodoService'];

  function TodoController($scope, TodoService){
    $scope.todos = [];
    $scope.newTodo = {};
    $scope.addTodo = addTodo;
    $scope.deleteTodo = deleteTodo;
    getTodos();
    
    function deleteTodo(todo){
      TodoService.delete(todo)
                  .then(function(res){
                    getTodos();
                  });
    }

    function addTodo(newTodo){
      console.log('Creating a new todo...');
      TodoService.create(newTodo)
                  .then(function(res){
                    getTodos();
                    $scope.newTodo = {};
                  });
    }

    function getTodos(){
      console.log($scope.todos);
      console.log('Getting the todos...');
      TodoService.getAll()
                .then(function(res){
                  $scope.todos = res.data.todos;
                });
    }
  }
})()