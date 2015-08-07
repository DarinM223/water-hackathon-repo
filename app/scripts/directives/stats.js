'use strict';

angular.module('angularApp')
  .directive('stats', function($http) {
    return {
        restrict: 'E',
	  scope: {}, 
	 
	  link: function(scope, element, attrs) {
	    scope.tabs = [];
	    $http
		.get('http://54.153.46.28/waterusage')
		.then(function(response) {
			for(var i = 0; i < response.data.length; i++)
			    {
				if(typeof scope.tabs[i] !== 'undefined' && 
				   scope.tabs[i] !== null)
				    {
					scope.tabs[i] = response.data[i];
				    }

				else
				    scope.tabs.push(response.data);
			    }
			console.log(response.data);
			//scope.tabs = response.data;
			
			//console.log(scope.tabs);
			
		    }, function(response) {
			console.log('Error: ', response);
		    });
        },
        templateUrl: '../../views/stats-widget.html'
    };
  });
