define(['frontend/modules/lists/models/list'], function(Model) {
  return Backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage('lists'),
    model: Model
  });
});
