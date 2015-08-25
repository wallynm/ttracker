define(['text!frontend/modules/application/template.html', 'frontend/core/common/layout', 'frontend/core/header/headerView'], function(tpl, Layout, Header) {

  return Layout.extend({
    el: '.app',
    template: _.template(tpl),

    initialize: function() {
      this.getRegion('header').show(new Header());
    },

    onRender: function(){
      if (_.isNull(App.User.get('logged'))){
        this.hideHeader();
      }
    },

    hideHeader: function() {
      this.getRegion('header').currentView.$el.hide();
    },

    showHeader: function() {
      this.getRegion('header').currentView.$el.show();
    },

    regions: {
      header  : '#app-header',
      content : '#app-content'
    }
  });
});
