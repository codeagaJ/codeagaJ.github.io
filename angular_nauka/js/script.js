angular.module('app', [ ]);

angular.module('app').controller('mainCtrl', function($scope) {
  
    $scope.user1 = {
    name: 'Agnieszka ',
    address: {
      street: 'Wrocławska',
    city: 'Warszawa',
    country: 'Polska',
    },
      
    friends:  [
        'Dorota',
        'Tomek',
        'Marta'
      ]    
  }
    
    
    $scope.user2 = {
    name: 'Agnieszka ',
    address: {
      street: 'Wrocławska',
    city: 'Warszawa',
    country: 'Polska',
    },
      
    friends:  [
        'Dorota',
        'Tomek',
        'Marta'
      ]    
  }
});

angular.module('app').directive('userInfoCard', function() {
  return {
    templateUrl: "userInfoCard.html",
    restrict: "E",
    scope: {
      user: '='  
    },
    controller: function($scope) {
        $scope.collapsed = false;
        $scope.knightMe = function(user) {
        user.rank= "Dane";
      }
      $scope.collapse = function() {
          $scope.collapsed = !$scope.collapsed;
      } 
    }
  }
});

angular.module('app').directive('address', function() {
    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'address.html',
        controller: function($scope) {
        $scope.collapsed = false;
        $scope.collapseAddress= function() {
            $scope.collapsed = true;
        }
        $scope.expandAddress = function() {
            $scope.collapsed = false;
        }
        }
    }
})