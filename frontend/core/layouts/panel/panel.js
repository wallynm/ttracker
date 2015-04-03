define(['frontend/core/common/layout'], function(Layout) {
  return Layout.extend({
    tagName: 'div',
    className: 'layout layout-panel',

    regions: {
      content: '.content'
    },

    initialize: function() {
      console.warn('123');
    }
  });
});
