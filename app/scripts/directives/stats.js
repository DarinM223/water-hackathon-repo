'use strict';

/*double energyPerHour(double energy, double hour){
    return energy/hour; 
    }*/

/*String dailyRanking(int yourRank, int totalPeople){
    
  }*/

angular.module('angularApp')
  .directive('stats', function() {
    return {
        restrict: 'E',
	  scope: {}, 
	  link: function(scope, element, attrs) {
          scope.hello = 'Stats';
	  //  energyPerHour();
	  //scope.stats = ;
        },
        templateUrl: '../../views/stats-widget.html'
    };
  });
