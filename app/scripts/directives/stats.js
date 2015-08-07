'use strict';
function energyPerHour(energy, hour){
    return energy/hour; 
}

/*function ranking(var yourRank, var totalPeople){
    var yourRankString = yourRank.toString();
    var totalPeopleString = totalPeople.toString();
    return yourRankString + "/" + totalPeopleString;
    }*/

/*function monthlyEnergyUsage(var monthlyEnergy){
    return monthlyEnergy;
    }*/

angular.module('angularApp')
  .directive('stats', function() {
    return {
        restrict: 'E',
	  scope: {}, 
	  link: function(scope, element, attrs) {
          scope.hello = 'Stats';	
	  scope.integer = 9;
	  scope.stats = energyPerHour(scope.integer, 91);
	  //scope.rank = ranking(1, 692332);
        },
        templateUrl: '../../views/stats-widget.html'
    };
  });
