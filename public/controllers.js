/*
 * CONTROLLERS
 */

'use strict';

angular.module('myApp.controllers', [])
  .controller('MainCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
  
  }])

  .controller('ResultsCtrl', ['$scope', function ($scope) {
    $scope.chartObject = {
  "type": "PieChart",
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
            "v": "Bernie Sanders"
          },
          {
            "v": 40,
            "p": {
              "style": "color:white;background-color:#800080;"
            }
          },
          null
        ]
      },
      {
        "c": [
          {
            "v": "Hilary Clinton"
          },
          {
            "v": 30,
            "p": {
              "style": "color:purple;background-color:red;"
            }
          },
          null
        ]
      },
      {
        "c": [
          {
            "v": "Deez Nuts"
          },
          {
            "v": 25,
            "p": {
              "style": "color:black;background-color:#33ff33;"
            }
          },
          null
        ]
      },
      {
        "c": [
          {
            "v": "Jill Stein"
          },
          {
            "v": 10,
            "p": {
              "style": "color:white;background-color:#800080;"
            }
          },
          null
        ]
      },
      {
        "c": [
          {
            "v": "Donald Trump"
          },
          {
            "v": 4,
            "p": {
              "style": "color:white;background-color:#800080;"
            }
          },
          null
        ]
      },
    ]
  },
  "options": {
    "title": "Youth 2015 Presidental Results",
    "isStacked": "true",
    "fill": 20,
    "displayExactValues": true,
    "vAxis": {
      "title": "Election Results",
      "gridlines": {
        "count": 5
      }
    },
    "hAxis": {
      "title": "Candidates"
    },
    "allowHtml": true,
    "tooltip": {
      "isHtml": false
    }
  },
  "formatters": {
    "color": [
      {
        "columnNum": 4,
        "formats": [
          {
            "from": 0,
            "to": 3,
            "color": "white",
            "bgcolor": "red"
          },
          {
            "from": 3,
            "to": 5,
            "color": "white",
            "fromBgColor": "red",
            "toBgColor": "blue"
          },
          {
            "from": 6,
            "to": null,
            "color": "green",
            "bgcolor": "#0f0"
          }
        ]
      }
    ]
  }
}
  }])

  .controller('HomeCtrl', ['$scope', function ($scope) {
    $scope.myInterval = 2000;
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