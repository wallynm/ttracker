define(['frontend/core/common/router'], function(Router) {
  return Router.extend({

    routes: {
      '': 'index',
        'boardShow': 'activityLog',
      'insert': 'insertUser',
      'update/:id': 'updateUser'
    },

    index: function() {
      console.log('Users show');
      require(['frontend/modules/users/views/users.show'], function(Users) {
        App.mainRegion.show(new Users());
      });
    },

    boardShow: function() {
      console.log('Users activity log');
    },
  });
});
