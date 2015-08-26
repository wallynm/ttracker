define(['frontend/modules/tasks/models/task', 'text!frontend/modules/tasks/templates/task.html'],
  function(Model, tpl) {
  return Marionette.ItemView.extend({
    className: 'task',
    template: _.template(tpl),
    model: Model,

    serializeData: function() {
      return {
        model : this.model.attributes,
      };
    },
  });
});
