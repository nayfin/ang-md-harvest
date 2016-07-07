class HeaderController  {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   */
  constructor($log, $mdSidenav) {
    this.$log = $log;
    this.$mdSidenav = $mdSidenav;
  //  this.$routeParams = $routeParams;
  //  this.showDevView;
    /*
    this.toggleDevView = ()=>{
      console.log(this.showDevView);
      //this.showDevView = !showDevView;
    }
    */
  }
  toggleUserList(){
    this.lockul = !this.lockul;
  }
  toggleDevView(){
    this.viewshown = !this.viewshown;
  }

}

export default HeaderController;
