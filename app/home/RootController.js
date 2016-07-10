class RootController{

  constructor($mdSidenav, $log, $http ) {

    this.showUserList = false;
    this.devShown = false;

    //Navigation values
    this.curSection = "Home";
    this.curSubSection = null;

    this.gardenImgUrl = "http://thirstyrootgardens.org/wp-content/uploads/2014/06/IMAG2209.jpg";
    //TODO: $resource
    this.nav = [];
    // Garden  Variables
    this.zonesSelected = [];
    this.allPlants = [];
    this.userPlants = [];

    //TODO: Switch to $resource, having problems with dependency injection
    $http.get('./home/Garden/PickPlants/plantData.json').then((response)=>{
        this.allPlants = response.data;
    });
    //TODO: $resource change nav to sections
    $http.get('./home/sections.json').then((response)=>{
        this.nav = response.data;
    });
  }
  updateLocation(section, subsection){
    this.curSection = section;
    this.curSubSection = subsection ? subsection : null;
    this.showUserList = (this.curSubSection === "Pick Plants");
  }
}
export default ['$mdSidenav', '$log', '$http', RootController];
