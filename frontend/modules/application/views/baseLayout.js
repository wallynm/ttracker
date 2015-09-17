define(['text!frontend/modules/application/templates/template.html', 'frontend/core/common/layout', 'frontend/modules/application/views/headerView'], function(tpl, Layout, Header) {

  return Layout.extend({
    el: '#app',
    template: _.template(tpl),

    initialize: function() {
      var self = this;
      self.content.on('swap', function() {
        App.layout.getRegion('header').currentView.updateDisplay();
      });
    },

    onRender: function() {
      this.getRegion('header').show(new Header());
      App.layout.getRegion('header').currentView.updateDisplay();
    },

    regions: {
      header: '#header',
      content: '#content'
    }
  });
});
