define(['text!frontend/modules/tasks/templates/empty.html'],
  function(tpl, Model) {
  return Marionette.ItemView.extend({
    className : 'task empty-task',
    template  : _.template(tpl),
  });
});
