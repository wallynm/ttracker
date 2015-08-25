define(['text!frontend/modules/lists/templates/empty.html'],
  function(tpl, Model) {
  return Marionette.ItemView.extend({
    className : 'task empty-task',
    template  : _.template(tpl),
  });
});
