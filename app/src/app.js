//Import everything and give to big-harvest module
import angular from 'angular'

import 'angular-route';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import Root from 'sharedComponents/root/Root';

import Header from 'sharedComponents/header/Header';
import Home from 'views/Home/Home';
import HardinessZones from 'views/HardinessZones/HardinessZones';
import PickPlants from 'views/PickPlants/PickPlants';

export default angular.module( 'big-harvest', [ 'ngMaterial' , 'ngRoute', Root.name] )
  //a bunch of componenents
  //TODO: Organize file locations and logic
  .component( Header.name, Header.config )
  .component( Home.name, Home.config )
  .component( HardinessZones.name, HardinessZones.config )
  .component( PickPlants.name, PickPlants.config )
  .config(['$locationProvider', '$routeProvider', '$mdIconProvider', '$mdThemingProvider',
    function config($locationProvider, $routeProvider, $mdIconProvider, $mdThemingProvider) {
      $locationProvider.hashPrefix('!');
      //tells ng-view what to show
      $routeProvider
        .when('/', {
          template: `<home></home>`
        })
        .when('/hardiness',{
          template: `<hardiness selected='root.zonesSelected'></hardiness>`
        })
        .when('/pickPlants',{
          template: `<pickplants zones='root.zonesSelected'></pickplants>`,
        })
        .otherwise('/');
    // Sets up icons
    //TODO: Fix sizing issues
      $mdIconProvider
        .icon("menu", "./assets/svg/menu.svg", 24)
        .icon("info", "./assets/svg/info.svg", 8)
        .icon("shovel", "./assets/svg/shovel.svg", 128); //TODO: Ready to use, but size won't change!!!!
      //Sets up themes
      //TODO: Really dig in here after rest of primary logic is finished
      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('red');
    }
  ])
  .run(() => {
    console.log(`Starting the 'big-harvest' module`);
  });
