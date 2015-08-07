'use strict';


angular.module('angularApp')
  .directive('ranking', function($http, $interval) {
    var pollRanking = function(scope) {
      $http
      .get('http://54.153.46.28/competition')
      .then(function(response) {
        scope.tabs = response.data;
      }, function(response) {
        console.log('Error: ', response);
      });
    };

    var showTab = function(scope, index) {
      scope.activeIndex = index;
    };

    return {
        restrict: 'E',
        scope: {},
        link: function(scope, element, attrs) {
          scope.activeIndex = 0;
          scope.tabs = [];
          scope.showTab = showTab.bind(null, scope);
          pollRanking(scope);
          // $interval(pollRanking.bind(null, scope), 1000);
        },
        templateUrl: '../../views/ranking-widget.html'
    };
  });
