import PickPlantsController from './PickPlantsController'

export default {
  name : 'pickplants',
  config : {
    bindings: {},
    templateUrl      : 'views/PickPlants/PickPlants.html',
    controller       : [ '$log', '$mdDialog', PickPlantsController ]
  }
};
