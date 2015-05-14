angular.module('todoApp', ['ionic','todoApp.controllers','todoApp.services'])

.run(function($ionicPlatform,$state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    $state.go('todos');
  });
}).config(function($stateProvider){
        $stateProvider.state('todos',{
           url:'/todos',
           controller:'TodoListController',
           templateUrl:'views/todos.html'
        }).state('createTodo',{
            url:'/todo/new',
            controller:'TodoCreationController',
            templateUrl:'views/create-todo.html'
        }).state('editTodo',{
            url:'/todo/edit/:id/:content',
            controller:'TodoEditController',
            templateUrl:'views/edit-todo.html'
        });
});
