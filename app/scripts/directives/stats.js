'use strict';

angular.module('angularApp')
  .directive('stats', function() {
    return {
        restrict: 'E',
	  scope: {}, 
	  link: function(scope, element, attrs) {
	    scope.tabs = [
		{
		    name: 'Stats',
		    list: [
	              { name: 'Energy/Hr', val: energyPerHour(1, 100) + 
			" MW/Hr"},
	              { name: 'Daily Rank', val: ranking(1, 100)},
	              { name: 'Monthly Energy', val: monthlyEnergy(10) + 
		      " GW"},
	              { name: 'Monthly Rank', val: ranking(99, 100) },
		   ]
		}
	    ];
        },
        templateUrl: '../../views/stats-widget.html'
    };
  });
