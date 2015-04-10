define(['text!frontend/modules/issues/templates/issue.html', 'frontend/modules/issues/models/issue'],
  function(tpl, Model) {
  return Marionette.ItemView.extend({
    className : 'issue',
    model: new Model(),
    serializeData: function() {
      return {
        model : this.model.attributes,
      };
    },
    template  : _.template(tpl),
  });
});
