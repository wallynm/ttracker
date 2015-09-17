define([
  'text!frontend/modules/application/templates/template.html',
  'frontend/core/common/layout',
  'frontend/modules/application/views/headerView',
  'frontend/modules/application/views/sidebarView'],

  function(tpl, Layout, Header, Sidebar) {
  return Layout.extend({
    el: '#app',
    template: _.template(tpl),

    initialize: function() {
      var self = this;
      self.content.on('swap', function() {
        self.updateLayoutDisplay();
      });
    },

    onRender: function() {
      this.getRegion('header').show(new Header());
      this.getRegion('sidebar').show(new Sidebar());
      this.updateLayoutDisplay();
    },

    updateLayoutDisplay: function() {
      App.layout.getRegion('header').currentView.updateDisplay();
      App.layout.getRegion('sidebar').currentView.updateDisplay();
    },

    regions: {
      sidebar: '#app-sidebar',
      header: '#header',
      content: '#content'
    }
  });
});
