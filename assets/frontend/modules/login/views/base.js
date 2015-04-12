define(['text!frontend/modules/login/templates/base.html'],
  function(tpl) {
  return Marionette.ItemView.extend({
    template : _.template(tpl),
    className : 'login-form',
    events : {
      'click #btn-login' : 'checkCredentials'
    },

    initialize : function() {
      var self = this;
      self.logged = window.App.User.get('logged');
    },

    checkCredentials : function() {
      window.App.User.set({
        logged : true,
        facebookID : 5732544234,
        firstName : 'Wallysson',
        lastName : 'Nunes',
        college : 'Puc São Gabriel',
        state: 'Minas Gerais',
        email : 'wally.nm@gmail.com',
      }).save();

      App.Router.navigate('#boards', {trigger: true});
    },

    onRender : function() {
      $('#login-content').removeClass('hide');

    },

    onShow : function() {}
  });
});
