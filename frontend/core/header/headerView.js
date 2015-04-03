define(['text!./header.html'],
  function( tpl ) {
  return Backbone.Marionette.ItemView.extend({
    template : _.template(tpl),

    initialize : function()
    {
      var self = this;
      self.logged = App.User.get('logged');
    }
  });
});
