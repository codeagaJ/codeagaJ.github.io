angular.module('app', [ ]);

angular.module('app').controller('mainCtrl', function($scope) {
  
    $scope.user = {
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
    controller: function($scope) {
        $scope.knightMe = function(user) {
        user.rank= "Dane";
      }
    }
  }
});