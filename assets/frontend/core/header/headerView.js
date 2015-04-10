define(['text!frontend/core/header/header.html'],
  function(tpl) {
  return Backbone.Marionette.ItemView.extend({
    template : _.template(tpl),

    initialize : function() {
      self.logged = App.User.get('logged');
    }
  });
});
