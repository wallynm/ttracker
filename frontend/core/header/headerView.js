define(['text!frontend/core/header/header.html'],
  function(tpl) {
  return Backbone.Marionette.ItemView.extend({
    template : _.template(tpl),

    events: {
      'click @ui.logoutButton': 'logout'
    },

    ui: {
      logoutButton: '#btn-logout',
    },

    logout: function() {
      App.layout.showHeader();
      App.Router.navigate('#', {trigger: true});
    }
  });
});
