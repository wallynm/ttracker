define(['text!frontend/lists/templates/lists.html'],
  function( tpl ) {
  return Backbone.Marionette.ItemView.extend({
    template : _.template(tpl),
  });
});
