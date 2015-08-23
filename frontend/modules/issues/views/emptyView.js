define(['text!frontend/modules/issues/templates/empty.html'],
  function(tpl, Model) {
  return Marionette.ItemView.extend({
    className : 'issue empty-issue',
    template  : _.template(tpl),
  });
});
