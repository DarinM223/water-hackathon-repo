'use strict';

angular.module('angularApp')
  .directive('ranking', function($http) {
    return {
        restrict: 'E',
        scope: {},
        link: function(scope, element, attrs) {
          scope.tabs = [];
          $http
            .get('http://54.153.46.28/competition')
            .then(function(response) {
              scope.tabs = response.data;
            }, function(response) {
              console.log('Error: ', response);
            });
        },
        templateUrl: '../../views/ranking-widget.html'
    };
  });
