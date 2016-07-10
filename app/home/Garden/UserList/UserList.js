import UserListController from './UserListController'

export default {
  name : 'userlist',
  config : {
    bindings         : {plants: '<'},//
    templateUrl      : 'home/Garden/Userlist/UserList.html',
    controller       : [ '$log', UserListController ]
  }
};
