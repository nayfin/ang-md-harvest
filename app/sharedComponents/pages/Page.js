// Load the custom app ES6 modules

import PageService from 'lib/page/services/PageDataservice'
import PageController from 'lib/page/controllers/PageController'

// Define the Angular 'users' module

export default angular
    .module( "page", [ 'ngMaterial' ] )
    .service("PageService"             , PageService )
    .controller("PageController"       , PageController );
