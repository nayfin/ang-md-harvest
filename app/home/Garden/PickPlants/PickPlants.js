import PickPlantsController from './PickPlantsController'

export default {
  name : 'pickplants',
  config : {
    bindings: {zones: '<', plants: '<', selected: '='}, // , selected: '='
    templateUrl      : 'home/Garden/PickPlants/PickPlants.html',
    controller       : [ '$http','$log', '$mdDialog', PickPlantsController ]
  }
};
