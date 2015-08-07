'use strict';

angular.module('angularApp')
  .directive('stats', function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
          scope.hello = 'Hello!';
        },
        templateUrl: '../../views/stats-widget.html'
    };
  });
