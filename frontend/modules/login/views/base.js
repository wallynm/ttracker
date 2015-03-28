define(['text!frontend/login/templates/base.html'],
  function( tpl ) {
  return Backbone.Marionette.ItemView.extend({
    template : _.template(tpl),
    className : 'login-form',
    events :
    {
      'click #btn-login' : 'checkCredentials'
    },

    initialize : function()
    {
      var self = this;
      self.logged = App.User.get('logged');
    },

    checkCredentials : function()
    {
      App.User.set({
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

    onRender : function ()
    {
      var self = this;
      $('#login-content').removeClass('hide');

    },

    onShow : function ()
    {
    }
  });
});
