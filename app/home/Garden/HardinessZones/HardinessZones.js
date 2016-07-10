import HardinessZonesController from './HardinessZonesController'

export default {
  name : 'hardiness',
  config : {
    bindings: {selected: '=', headerLocation: '&selectLocation'},
  //  template: `<h1>This working?</h1>`,
    templateUrl      : 'home/Garden/HardinessZones/HardinessZones.html',
    controller       : [ '$log', '$mdDialog', HardinessZonesController ]
  }
};
