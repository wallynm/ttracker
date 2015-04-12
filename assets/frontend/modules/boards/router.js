define(['frontend/core/common/router', 'frontend/modules/boards/views/boardLayout'], function(Router, BoardLayou) {
  return Router.extend({

    initialize : function(options) {
      this.container = options.container;
    },

    routes: {
      '': 'index',
      'show': 'show',
      'insert': 'insert',
      'update/:id': 'updateUser'
    },

    index: function() {
      this.container.show(new BoardLayou());
    },

    show: function() {
      console.log('Users activity log');
    },

    insert: function() {
      console.log('Users activity log');
    },
  });
});
