function RootController($mdSidenav, $mdBottomSheet, $log ) {
  let self = this;

  self.zonesSelected = [];
  self.page = "Home";

}
export default ['$mdSidenav', '$mdBottomSheet', '$log', RootController];
