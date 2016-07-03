function RootController($mdSidenav, $mdBottomSheet, $log ) {
  var self = this;

  self.zonesSelected = [];
  self.page = "Home";

}
export default ['$mdSidenav', '$mdBottomSheet', '$log', RootController];
