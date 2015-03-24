define(['text!frontend/login/templates/base.html'],
  function( tpl ) {
  return Backbone.Marionette.ItemView.extend({
    template : _.template(tpl),
    className : 'login-form',
    events :
    {
      'click #login-btn ' : 'checkCredentials'
    },

    initialize : function()
    {
      var self = this;
      self.logged = App.models.User.get('logged');
    },

    checkCredentials : function()
    {
      App.Router.navigate('#timeline', {trigger: true});
      var $region = $('#login-content');

      App.models.User.set({
        logged : true,
        facebookID : 5732544234,
        firstName : 'Wallysson',
        lastName : 'Nunes',
        college : 'Puc São Gabriel',
        state: 'Minas Gerais',
        email : 'wally.nm@gmail.com',
      }).save();


      $region.css({'opacity': 0});
      setTimeout(function(){
        $region.removeAttr('style').addClass('hide');

      }, 600);
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
