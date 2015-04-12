define(function() {
  return Backbone.Model.extend({
    localStorage : new Backbone.LocalStorage('lists'),

    defaults:{
      id: null,
      title: null,
      issues: null,
      duedate: null
    }
  });
});
