'use strict';

angular.module('angularApp')
  .directive('ranking', function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
          scope.hello = 'Hello!';
        },
        templateUrl: '../../views/ranking-widget.html'
    };
  });
