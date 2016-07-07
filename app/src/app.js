//Import everything and give to big-harvest module
import angular from 'angular'

import 'angular-resource';
import 'angular-route';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import Root from 'src/root/Root';
import Header from 'sharedComponents/header/Header';

  //Home
  import Home from 'views/Home/Home';

  //Sections:

    //Garden componenents
    import HardinessZones from 'views/HardinessZones/HardinessZones';
    import PickPlants from 'views/PickPlants/PickPlants';
    import UserList from 'sharedComponents/userList/UserList';

    //Recipes componenents

    //Before Starting componenents

export default angular.module( 'big-harvest', [ 'ngResource', 'ngMaterial' , 'ngRoute',  Root.name] )
  //a bunch of componenents
  //TODO: Organize file locations and logic
  .component( Header.name, Header.config)

  .component( Home.name, Home.config)

  .component( HardinessZones.name, HardinessZones.config)
  .component( PickPlants.name, PickPlants.config)
  .component( UserList.name, UserList.config)
  //TODO: Fix Dependency Injection of $resource
  .config([ '$resourceProvider','$locationProvider', '$routeProvider', '$mdIconProvider', '$mdThemingProvider',
    function config( $resourceProvider, $locationProvider, $routeProvider, $mdIconProvider, $mdThemingProvider) {
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
          template: `<pickplants zones='root.zonesSelected' selected='root.userPlants' plants='root.allPlants'></pickplants>`,
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
