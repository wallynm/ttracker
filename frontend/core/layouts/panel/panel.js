define(function(){
  return Backbone.Marionette.LayoutView.extend({
    tagName: 'div',
    className: 'layout layout-panel',

    regions: {
      content: '.content'
    },

    initialize: function(){

      alert('123');
      console.warn('123');
    }
  });
});
