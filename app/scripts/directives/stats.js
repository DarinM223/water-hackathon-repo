'use strict';

angular.module('angularApp')
  .directive('stats', function() {
    return {
        restrict: 'E',
	  scope: {}, 
	  link: function(scope, element, attrs) {
          scope.hello = 'Stats UPDATED';	
	  scope.integer = 9;
	  scope.stats = energyPerHour(scope.integer, 91);
	  scope.rank = ranking(1, 692332, "Daily");
        },
        templateUrl: '../../views/stats-widget.html'
    };
  });
