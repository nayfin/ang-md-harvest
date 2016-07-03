class HardinessZonesController  {
  /**
   * @constructor
   * @param {!angular.Scope} this
   */
  constructor($log, $mdDialog) {
    this.$log = $log;
    this.$mdDialog = $mdDialog;
    this.zones = [1,2,3,4,5,6,7,8,9,10];
  }
  //dialog controller; TODO: move to a service, enhance using custom dialog
  hardinessInfo() {
    let $mdDialog = this.$mdDialog;
    $mdDialog.show(
      $mdDialog.alert()
        .clickOutsideToClose(true)
        .title(`HardinessZones:`)
        .textContent(`Determine the first and last frost dates for a region. These dates are crucial as they describe the length of your area's growing season and determine which plants can be grown. Users in colder regions can utilize green houses or hoop houses to lengthen season and grow plants that would otherwise be unable to grow in area. Thus allowing you to select multiple hardiness zones.`)
        .ariaLabel('Hardiness Zone Description')
        .ok('Nice!')
    );
  };
  //checkbox functions
  //TODO: make reusable!!!
  toggle(item, list) {
    // checks list i.e this.selected to see if clicked zone is already in selected array
    let idx = list.indexOf(item);
    if (idx > -1) {
      //pulls out if already there
      list.splice(idx, 1);
    }
    else {
      //pushes to if not
      list.push(item);
    }
  }
  //returns true if item in list, else returns false
  exists(item, list) {
    return list.indexOf(item) > -1
  }
  //checks to see if some but not all boxes are checked, return boolean

  noneSelected(){
    return(this.selected.length < 1);
  }
  isIndeterminate() {
    return (this.selected.length !== 0 &&
        this.selected.length !== this.zones.length);
  }
  isChecked() {
    return this.selected.length === this.zones.length;
  }
  toggleAll() {
    if (this.selected.length === this.zones.length) {
      this.selected = [];
    } else if (this.selected.length === 0 || this.selected.length > 0) {
      this.selected = this.zones.slice(0);
    }
  };
}

export default HardinessZonesController;
