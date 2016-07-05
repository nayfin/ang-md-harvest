import HeaderController from './HeaderController'

export default {
  name : 'header',
  config : {
    bindings         : {  subtitle: '<' },
    templateUrl      : './sharedComponents/header/Header.html',
    controller       : [ '$log', HeaderController ]
  }
};
