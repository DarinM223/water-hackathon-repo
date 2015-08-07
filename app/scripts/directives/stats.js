'use strict';

angular.module('angularApp')
  .directive('stats', function() {
    return {
        restrict: 'E',
	  scope: {}, 
	  link: function(scope, element, attrs) {
	    scope.tabs = [
		{
		    name: 'Stats',
		    list: [
	              { name: 'Energy/hr', val: energyPerHour(1, 100)}, 		          ]
		}
	    ];
        },
        templateUrl: '../../views/stats-widget.html'
    };
  });
