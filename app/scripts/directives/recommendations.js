'use strict';

angular.module('angularApp')
  .directive('recommendations', function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
          scope.recommendations = ["a","b","c","d"];
        },
        templateUrl: '../../views/recommendations-widget.html'
    };
  });