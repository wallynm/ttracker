define(function() {
  return Backbone.Model.extend({
    defaults:{
      id: null,
      title: null,
      issues: null,
      duedate: null
    }
  });
});
