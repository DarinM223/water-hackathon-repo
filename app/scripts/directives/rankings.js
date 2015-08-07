'use strict';

angular.module('angularApp')
  .directive('ranking', function() {
    return {
        restrict: 'E',
        scope: {},
        link: function(scope, element, attrs) {
          scope.tabs = [
            {
              name: 'friends',
              list: [
                { name: 'a', val: '1' },
                { name: 'b', val: '2' }
              ]
            }
          ];
        },
        templateUrl: '../../views/ranking-widget.html'
    };
  });
