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
			scope.tabs = response.data;
			//scope.tabs = response.data;
			
			//console.log(scope.tabs);
			
		    }, function(response) {
			console.log('Error: ', response);
		    });
        },
        templateUrl: '../../views/stats-widget.html'
    };
  });
