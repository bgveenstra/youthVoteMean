/*
 * CONTROLLERS
 */

'use strict';

angular.module('myApp.controllers', [])
  .controller('MainCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
  
  }])

  .controller('ResultsCtrl', ['$scope', function ($scope) {
    $scope.chartObject = {
      "type": "AreaChart",
      "displayed": false,
      "data": {
        "cols": [
          {
            "id": "month",
            "label": "Month",
            "type": "string",
            "p": {}
          },
          {
            "id": "laptop-id",
            "label": "Laptop",
            "type": "number",
            "p": {}
          },
          {
            "id": "desktop-id",
            "label": "Desktop",
            "type": "number",
            "p": {}
          },
          {
            "id": "server-id",
            "label": "Server",
            "type": "number",
            "p": {}
          },
          {
            "id": "cost-id",
            "label": "Shipping",
            "type": "number"
          }
        ],
        "rows": [
          {
            "c": [
              {
                "v": "January"
              },
              {
                "v": 19,
                "f": "42 items"
              },
              {
                "v": 12,
                "f": "Ony 12 items"
              },
              {
                "v": 7,
                "f": "7 servers"
              },
              {
                "v": 4
              }
            ]
          },
          {
            "c": [
              {
                "v": "February"
              },
              {
                "v": 13
              },
              {
                "v": 1,
                "f": "1 unit (Out of stock this month)"
              },
              {
                "v": 12
              },
              {
                "v": 2
              }
            ]
          },
          {
            "c": [
              {
                "v": "March"
              },
              {
                "v": 24
              },
              {
                "v": 5
              },
              {
                "v": 11
              },
              {
                "v": 6
              }
            ]
          }
        ]
      },
      "options": {
        "title": "Sales per month",
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
        "vAxis": {
          "title": "Sales unit",
          "gridlines": {
            "count": 10
          }
        },
        "hAxis": {
          "title": "Date"
        }
      },
      "formatters": {}
    }
  }])

  .controller('CarouselDemoCtrl', ['$scope', function ($scope) {
    $scope.myInterval = 3000;
    $scope.slides = [
      {
        image: 'http://us2012.bujournalism.info/wp-content/uploads/2012/11/Youth-VoteChanged.jpg'
      },
      {
        image: 'http://www.elections.tn.gov.in/Photos/Youth%20Vote.jpg'
      },
      {
        image: 'http://cstpdx.com/sites/clinton/files/bernie%20for%20the%20future.jpg'
      },
      {
        image: 'http://www.danacortezshow.com/wp-content/uploads/2015/08/deeznuts1.jpg'
      }
      ]
  }]);

  // .controller('ProfileCtrl', function ($scope) {
  //   $scope.user = {name: 'blah'}
  // })

  // .controller('LoginCtrl', function ($rootScope, $scope, User, $location) {
  //   $scope.user = {};
  //   $scope.login = function() {
  //     console.log($scope.user)
  //     console.log('logging in')
  //     User.login({}, $scope.user,
  //       function (data) {
  //         console.log(data.token)
  //         localStorage.setItem("jwtToken", data.token);
  //         $rootScope.$broadcast('loggedIn'); // TELL THE OTHER CONTROLLERS WE'RE LOGGED IN
  //         $location.path('/');
  //       },
  //       function (data) {
  //         var message = "Invalid Email or Password"
  //         console.log(message)
  //       }
  //     );
  //   };
  // })

  // .controller('SignUpCtrl', function ($rootScope, $scope, User, $location, Auth) {
    // $scope.signup = function() {
    //   // User.sign_up({}, $scope.user, 
    //   //   function(data) {

    //   //   },
    //   //   function(data) {
          
    //   //   })
    //   console.log($scope.user)
    //   console.log('signing up')
    //   $scope.user = {
    //     username: '',
    //     email: '',
    //     DOB: '',
    //     password: ''
    //   }
    //   $scope.postreq = function(user) {
    //     $http({
    //       method: 'post',
    //       url: '/sign-up',
    //       data:{
    //         user_username:user.username,
    //         user_email:user.email,
    //         user_DOB: user.DOB,
    //         user_password:user.password
    //       }
    //     })
    //     .success(function (data) {
    //       console.log("User posted to database")
    //       $rootScope.$broadcast('signup'); // TELL THE OTHER CONTROLLERS WE'RE LOGGED IN
    //       $location.path('/');
    //     })
    //     .error(function (data) {
    //       var message = "Invalid Email or Password"
    //       console.log(message)
    //     })
    // }
  // })

  //POSTS
  // .controller('TodosIndexCtrl', function ($scope, $location, Post, Auth) {
  //   Post.query(
  //     function(data) {
  //       $scope.todos = data
  //     },
  //     function(data) {
  //       $location.path('/login');
  //     }
  //   );

  //   $scope.todo = {};
  //   $scope.createTodo = function() {
  //     Post.save($scope.todo, 
  //       function(data){
  //         $scope.todos.push(data);
  //       },
  //       function(data) {
  //         alert("there was a problem saving your todo");
  //       }
  //     );
  //     $scope.todo = '';
  //   }

  //   $scope.deleteTodo = function(todo) {
  //     Post.delete({ id: todo._id });
  //     var index = $scope.todos.indexOf(todo)
  //     $scope.todos.splice(index, 1);
  //   }
  // })