'use strict';

var recList = [
              "Install a water aerator and flow restrictors",
              "Install a low volume water toilet",
              "Stop washing your car",
              "Keep your lawn watering to only twice a week",
              "Call a plumber to fix your water leak",
              "Recycle drain water for your plants",
              "Please stop washing your driveway",
              "Lower your shower time to 10min a day",
              "Insulate your water pipes!",
              "Install a shutoff valve to your hose",
              "Solar outdoor lighting is maintenance-free, and after initial costs, the lights are free to run.",
              "The energy in an average one day hurricane could power the United States for three years.",
              "The record for the most snowfall from a single storm in the U.S. belongs to Mt. Shasta, California, where 189 inches fell from Feb. 13-19, 1959.",
              "Santa Ana Wind. In southern California, a weather condition in which strong, hot, dust-bearing winds descend to the Pacific Coast around Los Angeles from inland desert regions.",
              "Although the wind may be a nuisance to some, it can serve as an important source of power. In California, some 16,000 windmills provide 1% of the state’s electric power–enough to service 300,000 homes.",
              "California relies heavily on snowpack each winter to resupply surface water streams and lakes.",
              "California uses hidden water supplies beneath the surface in aquifers, or groundwater, are drilled to make up the shortfall.",
              "When California faced a major drought in the late 1970s, fewer than 20 million people lived in the state. Now nearly 40 million live there."         
            ];
var finalRecs = [];
for(var i = 0; i < recList.length; i++) {
    if(Math.random() < 0.15) {
      finalRecs.push(recList[i]);
    }
}


angular.module('angularApp')
  .directive('recommendations', function($http) {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
          scope.recommendations = finalRecs;
          scope.weather = {};
          $http.get('http://api.openweathermap.org/data/2.5/weather?id=5381396').
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