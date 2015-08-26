define(['text!frontend/modules/application/template.html', 'frontend/core/common/layout', 'frontend/core/header/headerView'], function(tpl, Layout, Header) {

  return Layout.extend({
    el: '.app',
    template: _.template(tpl),

    initialize: function() {
      var self = this;
      self.getRegion('header').show(new Header());
      self.content.on('swap', function() {
        App.layout.getRegion('header').currentView.updateDisplay();

        // self.getRegion('header').currentView.changeDisplay();
      });
    },

    regions: {
      header  : '#app-header',
      content : '#app-content'
    }
  });
});
