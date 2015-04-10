define(['frontend/core/common/layout'], function(Layout) {
  return Layout.extend({
    tagName: 'div',
    className: 'layout layout-panel',

    onBeforeFetch: function() {
      alert('show loading panel');
    },

    onFetch: function() {
      alert('closes loading panel');
    }
  });
});
