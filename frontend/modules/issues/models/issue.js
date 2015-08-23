define(function() {
  return Backbone.Model.extend({

    defaults:{
      id: null,
      title: null,
      tags: null,
      date: null,
      description: null,
    }
  });
});
