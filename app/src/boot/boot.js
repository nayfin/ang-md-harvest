import angular from 'angular';

import BigHarvest from 'src/app';
/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {
    angular
      .module( 'jspm-bootstrap', [BigHarvest.name ] )
      .run(()=>{
        // Use main 'App' module and log startup status
        console.log(`Big Harvest jspm-bootstrapped!`);
      });

    let body = document.getElementsByTagName("body")[0];
    angular.bootstrap( body, [ 'jspm-bootstrap' ]);
  });
