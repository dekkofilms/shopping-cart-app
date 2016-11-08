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

      var gaugeReading = Math.floor(($scope.scale)/1.6)
      var gaugeElements = '<div id="' + $scope.id + '" class="gauge">\
                            <div class="mask">\
                              <div class="semi-circle"></div>\
                              <div class="semi-circle--mask"></div>\
                            </div>\
                          </div>'

      var lastGaugeSectionIndex = $(".gauge-section").length - 1
      var selectedGaugeSection = $(".gauge-section")[lastGaugeSectionIndex]
      $(selectedGaugeSection).append(gaugeElements);

      var selectedMeter = $("#" + $scope.id + " .semi-circle--mask")

      selectedMeter.animate({ textIndent: gaugeReading },
        {
          step: function(now,fx){
            $(this).css({
              '-webkit-transform': 'rotate('+ now +'deg)',
              '-moz-transform': 'rotate('+ now +'deg)',
              '-ms-transform': 'rotate('+ now +'deg)',
              'transform': 'rotate('+ now +'deg)'
            });
          },
          duration: 1000
        })
    },
  }
});
