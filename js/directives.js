app.directive('caffeinemeter', function () {
  return {
    restrict: 'E',
    scope: {
      scale : '=',
      id : '=',
    },
    templateUrl: '../partials/caffeinemeter.html',
    link: function ($scope, element, attrs) {
      if ($scope.scale > 180) {
        $scope.rating = 'HIGH';
      };

      if ($scope.scale < 180 && $scope.scale > 80) {
        $scope.rating = 'MEDIUM';
      };

      if ($scope.scale < 80) {
        $scope.rating = 'LOW';
      };
      
    },
  }
});
