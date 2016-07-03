//TODO: Only import required parts of controller
// import HardinessZonesController from '../HardinessZones/HardinessZonesController'

class PickPlantsController  {
  /**
   * @constructor
   * @param {!angular.Scope} this
   */
  constructor($log, $mdDialog, zonesSelected) {
    this.$log = $log;
    this.$mdDialog = $mdDialog;
    this.zones = [];
    this.selected = [];
    //TODO: replace with service call to plants.JSON
    this.plants = [{
        name: `tomato`,
        sun: `Full`,
        soil: `Loamy`,
        daycount: 80,
        compatibleZones: {1: false, 2: false, 3: false, 4: false, 5: true, 6: true, 7: true, 8: true, 9: true, 10: false}
      },
      {
        name: `carrot`,
        sun: `Light Shade`,
        soil: `Sandy`,
        daycount: `75`,
        compatibleZones: {1: false, 2: false, 3: false, 4: false, 5: true, 6: true, 7: true, 8: false, 9: false, 10: false}
      }
    ];
  }
}

export default PickPlantsController;
