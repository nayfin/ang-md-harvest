/*
  PickPlantsController:

  logic for pick plants page
  TODO:
    -Clean up
    -Add UserList bottomsheet and plantToUser()
    -Doll up plant cards
*/

class PickPlantsController  {
  /**
   * @constructor
   * @param {!angular.Scope} this

    this.zones passed down from root.zonesSelected through componenent html
   */
  constructor($http,$log, $mdDialog, zonesSelected) {

    this.$log = $log;
    this.$mdDialog = $mdDialog;
    this.plantsSelected = [];//empty array to which to push selected plants
    this.plants = []; //empty array to push all plants to, gotten below via $http TODO: use service
    //Filters plants by their compatability with selected hardiness zones
    //TODO: I woud transfer this to a filter file, but it will be discarded after switching to database, which will filter results before returning
    this.zoneFilter = (plant)=>{
      let compatibleZones = plant.compatibleZones,
          idx; //index of selected zone in plant's array, -1 if not in array
      if (this.hasOwnProperty('zones')) {
        //checks each zone selected against each plants index of compatibleZones, returns true if found
        for (var zone of this.zones) {
          idx = compatibleZones.indexOf(zone);
          if(idx > -1){
            return true;
          }
        }
      }
    };
    //Gets all plants from JSON file
    //TODO: Switch to ngResource, having problems with dependency injection
    $http.get('./views/PickPlants/plantData.json').then((response)=>{
        this.plants = response.data;
    });
  };

  /*
  */
  plantToUser(plant, userList){
    console.log(plant.name);
    userList.push(plant);
    console.log(userList);
  }
}

export default PickPlantsController;
