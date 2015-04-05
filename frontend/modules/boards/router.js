define(['frontend/core/common/router'], function(Router) {
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
      console.log('Users show');
      var r = $.Deferred();
      require(['frontend/modules/boards/views/board'], function(Board) {
        var baseView = new Board({
          container: this.container
        });

        // Eu posso criar uma funcao dentro do router responsavel por responder o resolve9
        r.resolve(baseView);
      });

      return r;
    },

    show: function() {
      console.log('Users activity log');
    },

    insert: function() {
      console.log('Users activity log');
    },
  });
});
