define(['text!frontend/modules/application/template.html', 'frontend/core/common/layout', 'frontend/core/header/headerView'], function(tpl, Layout, Header) {

  return Layout.extend({
    el: '.app',
    template: _.template(tpl),

    initialize: function() {
      if (!_.isNull(App.User.get('logged'))){
        this.showHeader();
      }
    },

    showHeader: function() {
      this.getRegion('header').show(new Header());
    },

    regions: {
      header  : '#app-header',
      content : '#app-content'
    }
  });
});
