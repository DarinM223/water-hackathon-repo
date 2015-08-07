'use strict';

angular.module('angularApp')
  .directive('recommendations', function($http) {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
          scope.recommendations = ["a","b","c","d"];
          scope.weather = {};
          $http.get('http://api.openweathermap.org/data/2.5/forecast/city?id=6098924&APPID=dbd3904b502508a91efe58edbbe5e589').
            then(function(response) {
              scope.weather = response.data;
              console.log(scope.weather);
            }, function(response) {
              console.log('boooo', response);
            });
        },
        templateUrl: '../../views/recommendations-widget.html'
    };
  });