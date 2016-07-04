//TODO: Only import required parts of controller
// import HardinessZonesController from '../HardinessZones/HardinessZonesController'

class PickPlantsController  {
  /**
   * @constructor
   * @param {!angular.Scope} this
   */
  constructor($http,$log, $mdDialog, zonesSelected) {
    this.$log = $log;
    this.$mdDialog = $mdDialog;
    this.zones = []; //not neccesarry, kept for legibility
    this.plantsSelected = [];
    //TODO: first pull from contructor, then transfer to filter file
    this.zoneFilter = (plant)=>{
      let compatibleZones = plant.compatibleZones,
          idx;
      if (this.hasOwnProperty('zones')) {
        for (var zone of this.zones) {
          idx = compatibleZones.indexOf(zone);
          if(idx > -1){
            return true;
          }
        }
      }
    };
    //TODO: replace with service call to plants.JSON
    $http.get('./views/PickPlants/plantData.json').then((response)=>{
        this.plants = response.data;
    });
  };
  /*
  zoneFilter(plant){
    let compatibleZones = plant.compatibleZones,
        idx;
    if (this.hasOwnProperty('zones')) {
      for (var zone of this.zones) {
        idx = compatibleZones.indexOf(zone);
        if(idx > -1){
          return true;
        }
      }
    }
  }
  */
  thisChecker(){
    console.log(this);
  }
}

export default PickPlantsController;
