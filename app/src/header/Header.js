import HeaderController from './HeaderController'

export default {
  name : 'header',
  config : {
    bindings         : {  subtitle: '<' },
    templateUrl      : 'shared-components/header/Header.html',
    controller       : [ '$log', HeaderController ]
  }
};
