import HeaderController from './HeaderController'

export default {
  name : 'header',
  config : {
    bindings         : { viewshown: '=', subtitle:'<', lockul: '='},
    templateUrl      : './sharedComponents/header/Header.html',
    controller       : [ '$log','$mdSidenav', HeaderController ]
  }
};
