define(['text!frontend/boards/templates/boards.html', 'frontend/lists/views/lists', 'Sortable'],
  function( tpl, lists ) {
  return Backbone.Marionette.ItemView.extend({
    template : _.template(tpl),
  });
});
