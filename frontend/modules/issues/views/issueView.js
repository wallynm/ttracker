define(['frontend/modules/issues/models/issue', 'text!frontend/modules/issues/templates/issue.html'],
  function(Model, tpl) {
  return Marionette.ItemView.extend({
    className: 'issue',
    template: _.template(tpl),
    model: Model,

    serializeData: function() {
      return {
        model : this.model.attributes,
      };
    },
  });
});
