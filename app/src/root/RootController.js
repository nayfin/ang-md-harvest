function RootController(plantService, $mdSidenav, $log ) {


  this.zonesSelected = [];
  this.allPlants = [];
  this.userPlants = [];

  this.devShown = true;
  this.page = "Home";
  this.showUserList = true;

  // TODO: Getting TypeError: plantService.loadAllPlants is not a function
  /*
  plantService
    .loadAllPlants()
    .then((plants)=>{
      this.allPlants = [].concat(plants);
    });
  */

}
export default ['$mdSidenav', '$log', RootController];
