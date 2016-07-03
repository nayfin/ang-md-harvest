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

//console.log(HomeController);
export default angular.module( 'big-harvest', [ 'ngMaterial' , 'ngRoute', Root.name] )

  .component( Header.name, Header.config )
  .component( Home.name, Home.config )
  .component( HardinessZones.name, HardinessZones.config )
  .component( PickPlants.name, PickPlants.config )
  .config(['$locationProvider', '$routeProvider', '$mdIconProvider', '$mdThemingProvider',
    function config($locationProvider, $routeProvider, $mdIconProvider, $mdThemingProvider) {
      $locationProvider.hashPrefix('!');

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

      $mdIconProvider
        .icon("menu", "./assets/svg/menu.svg", 24)
        .icon("info", "./assets/svg/info.svg", 8)
        .icon("shovel", "./assets/svg/shovel.svg", 128); //TODO: Ready to use, but size won't change!!!!

      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('red');
    }
  ])
  .run(() => {
    console.log(`Starting the 'big-harvest' module`);
  });
