import HomeController from './HomeController'

export default {
  name : 'home',
  config : {
    bindings         : {headerLocation: '&selectLocation'},
    templateUrl      : 'home/Home/Home.html',
    controller       : [ '$log', HomeController ]
  }
};
