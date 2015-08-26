define(['frontend/core/common/router', 'frontend/modules/boards/views/boardLayout'], function(Router, BoardLayout) {
  return Router.extend({

    initialize: function(options) {
      this.container = options.container;
      console.warn(this);
    },

    routes: {
      '': 'index',
      'show': 'show',
      'insert': 'insert',
      'update/:id': 'updateUser'
    },

    index: function() {
      this.container.show(new BoardLayout());
    },

    show: function() {
      console.log('Users activity log');
    },

    insert: function() {
      console.log('Users activity log');
    },
  });
});
