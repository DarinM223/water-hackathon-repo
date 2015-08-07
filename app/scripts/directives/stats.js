'use strict';

angular.module('angularApp')
  .directive('stats', function() {
    return {
        restrict: 'E',
	  scope: {}, 
	  link: function(scope, element, attrs) {
          scope.hello = 'Stats';
        },
        templateUrl: '../../views/stats-widget.html'
    };
  });
