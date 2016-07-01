import HeaderController from './HeaderController'

export default {
  name : 'header',
  config : {
    bindings         : {  subtitle: '<' },
    templateUrl      : 'src/header/Header.html',
    controller       : [ '$log', HeaderController ]
  }
};
