define(['text!frontend/core/templates/appBody.html'],
  function( tpl ) {
  return Backbone.Marionette.ItemView.extend({
    template : _.template(tpl),
  });
});
