define(['text!frontend/core/header/header.html'],
  function(tpl) {
  return Backbone.Marionette.ItemView.extend({
    template: _.template(tpl),

    ui: {
      logoutButton: '#btn-logout',
      userName: '.navbar .user'
    },

    onRender: function() {
      this.ui.userName.text(App.User.get('user'));
    }
  });
});
