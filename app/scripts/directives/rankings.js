'use strict';


angular.module('angularApp')
  .directive('ranking', function($http, $interval) {


    return {
        restrict: 'E',
        scope: {},
        bindToController: true,
        require: ['ranking'],
        controllerAs: 'rankingController',
        controller: function() {
          return;
        },
        link: function(scope, element, attrs, ctrls) {
          var vm = ctrls[0]; 

          var pollRanking = function() {
            $http
            .get('http://54.153.46.28/competition')
            .then(function(response) {
              for (var i = 0; i < response.data.length; i++) {
                if (typeof vm.tabs[i] !== 'undefined' && vm.tabs[i] !== null) {
                  vm.tabs[i] = response.data[i];
                } else {
                  vm.tabs.push(response.data);
                }
              }
            }, function(response) {
              console.log('Error: ', response);
            });
          };
          var showTab = function(index) {
            vm.activeIndex = index;
            console.log('New Active Index: ', vm.activeIndex);
          };

          vm.activeIndex = 0;
          vm.tabs = [];
          vm.showTab = showTab;
          // pollRanking(scope);
          $interval(pollRanking, 1000);
        },
        templateUrl: '../../views/ranking-widget.html'
    };
  });
