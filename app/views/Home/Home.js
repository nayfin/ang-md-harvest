import HomeController from './HomeController'

export default {
  name : 'home',
  config : {
    bindings         : {},
    templateUrl      : 'views/home/Home.html',
    controller       : [ '$log', HomeController ]
  }
};
