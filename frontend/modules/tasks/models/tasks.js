define(['frontend/modules/tasks/models/task'], function(Model) {
  return Backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage('tasks'),
    model: Model
  });
});
