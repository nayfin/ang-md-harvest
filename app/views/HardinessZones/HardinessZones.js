import HardinessZonesController from './HardinessZonesController'

export default {
  name : 'hardiness',
  config : {
    bindings: {selected: '='},
  //  template: `<h1>This working?</h1>`,
    templateUrl      : 'views/HardinessZones/HardinessZones.html',
    controller       : [ '$log', '$mdDialog', HardinessZonesController ]
  }
};
