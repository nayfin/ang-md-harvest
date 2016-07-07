import PickPlantsController from './PickPlantsController'

export default {
  name : 'pickplants',
  config : {
    bindings: {zones: '<', plants: '=', selected: '='}, // , selected: '='
    templateUrl      : 'views/PickPlants/PickPlants.html',
    controller       : [ '$http','$log', '$mdDialog', PickPlantsController ]
  }
};
