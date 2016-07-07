import UserListController from './UserListController'

export default {
  name : 'userlist',
  config : {
    bindings         : {plants: '<'  },// 
    templateUrl      : './sharedComponents/userlist/UserList.html',
    controller       : [ '$log', UserListController ]
  }
};
