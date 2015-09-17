define(['text!frontend/modules/application/templates/header.html'],
  function(tpl) {
  return Backbone.Marionette.ItemView.extend({
    template: _.template(tpl),
    tagName: 'nav',
    className: 'navbar',

    ui: {
      logoutButton: '#btn-logout',
      userName: '.navbar .user'
    },

    updateDisplay: function() {
      var self = this;
      self.$el.toggle(!_.isNull(App.User.get('logged')));
    },

    onRender: function() {
      this.ui.userName.text(App.User.get('user'));
      this.updateDisplay();
    }
  });
});
