//Import everything and give to big-harvest module
import angular from 'angular'

import 'angular-resource';
import 'angular-route';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import Root from 'home/Root';
  //Home
  import Home from 'home/Home/Home';
  import Header from 'sharedComponents/header/Header';

  //Sections:
  //import Garden from 'home/Garden/Garden';
    //Garden componenents
    import HardinessZones from 'home/Garden/HardinessZones/HardinessZones';
    import PickPlants from 'home/Garden/PickPlants/PickPlants';
    import UserList from 'home/Garden/userList/UserList';

    //Recipes componenents

    //Before Starting componenents

export default angular.module( 'big-harvest', [ 'ngResource', 'ngMaterial' , 'ngRoute',  Root.name] )
  //a bunch of componenents
  //TODO: Organize file locations and logic
  .component( Home.name, Home.config)
  .component( Header.name, Header.config)
  //Garden Components
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
          template: `<home select-location="root.updateLocation(section,subsection)"></home>`
        })
        .when('/hardiness',{
          template: `<hardiness selected='root.zonesSelected' select-location="root.updateLocation(section,subsection)"  ></hardiness>`
        })
        .when('/pickPlants',{
          template: `<pickplants zones='root.zonesSelected'
                                 selected='root.userPlants'
                                 plants='root.allPlants'
                                 select-location='root.updateLocation(section,subsection)'></pickplants>`,
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
