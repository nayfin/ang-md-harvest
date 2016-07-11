import HomeController from './HomeController'

export default {
  name : 'home',
  config : {
    bindings         : {sections: '<', updateSection: '&updateSection'},
    templateUrl      : 'home/Home/Home.html',
    controller       : [ '$log', HomeController ]
  }
};
