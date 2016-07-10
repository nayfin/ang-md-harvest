class GardenController{

  constructor($mdSidenav, $log, $http ) {

    this.zonesSelected = [];
    this.allPlants = [];
    this.userPlants = [];

    this.showUserList = true;

    //TODO: Switch to $resource, having problems with dependency injection
    $http.get('./views/PickPlants/plantData.json').then((response)=>{
        this.allPlants = response.data;
    });
  }
  updateLocation(section, subsection){
    this.curSection = section;
    this.curSubSection = subsection ? subsection : null;
  }
}
export default ['$mdSidenav', '$log', '$http', GardenController];
