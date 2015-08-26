define(function() {
  return Backbone.Model.extend({
    defaults:{
      id: null,
      title: null,
      tasks: null,
      duedate: null
    }
  });
});
