'use strict';

angular.module('angularApp')
  .directive('stats', function() {
    return {
        restrict: 'E',
	    scope: {}, //Empty object with a concept of isolate scope 
	 link: function(scope, element, attrs) {
          scope.hello = 'Stats';
	  //scope.stats = 'This is the Stats Section of our code';
        },
        templateUrl: '../../views/stats-widget.html'
    };
  });
