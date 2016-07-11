class RootController{

  constructor($mdSidenav, $log, $resource, $http, $location, $scope ) {
    this.$location = $location;

    this.showUserList = false;
    this.devShown = false;

    this.path = $location.path();
    this.pieces = this.seperateUrl();
    //Navigation values
    this.curSection = "Home";
    this.curSubSection = null;

    this.gardenImgUrl = "http://thirstyrootgardens.org/wp-content/uploads/2014/06/IMAG2209.jpg";
    //TODO: $resource
    this.sections = [];
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
        this.sections = response.data;
    });
    //updates root.path on each refresh
    $scope.$on('$locationChangeSuccess', ()=>{
      this.path = $location.path();
      this.updateSections();
    });
  }
  seperateUrl(){
    return this.path.split('/');
  }

  updateSections(){
    var pieces = this.seperateUrl();
    console.log(pieces);
    this.checkForHardy(pieces[2]);
    this.curSection = pieces[1];
    //TODO: Make filter to format nicely
    this.curSubSection = pieces[2] ? pieces[2] : null;
    this.showUserList = this.checkSubSection(pieces[2]);
    this.checkForHardy(pieces[2]);


  }
  //ensures at least one hardiness zone is selected if user is on pickPlants page
  checkForHardy(subSection){
    if(subSection === 'pickPlants' && this.zonesSelected.length === 0){
      console.log("inside");
      this.$location.path('Garden/hardiness');
    }
  }
  checkSubSection(subsection){
    return(subsection === "pickPlants" || subsection === "placePlants");
  }
}
export default ['$mdSidenav', '$log', '$resource','$http','$location', '$scope', RootController];
