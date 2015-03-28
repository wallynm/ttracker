define(['text!frontend/modules/lists/templates/list.html'],
  function( tpl ) {
  return Backbone.Marionette.ItemView.extend({
    className : 'board-list pull-left',
    template  : _.template(tpl),
  });
});
