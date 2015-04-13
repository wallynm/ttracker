define(['frontend/modules/issues/models/issue'], function(Model) {
  return Backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage('issues'),
    model: Model
  });
});
