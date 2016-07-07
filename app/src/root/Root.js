import PlantDataservice from './PlantDataservice'
import RootController from './RootController'
// Define the Angular 'users' module
export default angular
    .module( "root", [ 'ngMaterial' ] )
    .service('plantService', PlantDataservice)
    .controller("RootController", RootController );
