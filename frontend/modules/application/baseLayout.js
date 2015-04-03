define(['text!frontend/modules/application/template.html', 'frontend/core/common/layout'], function(tpl, Layout) {

  return Layout.extend({
    el: '.app',
    template: _.template(tpl),

    regions: {
      header  : '.app-header',
      content : '.app-content'
    }
  });
});
