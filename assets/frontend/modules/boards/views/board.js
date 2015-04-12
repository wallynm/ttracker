define(['frontend/core/layouts/panel', 'frontend/modules/lists/views/listView'],
function(PanelLayout, Lists) {
  //  return PanelLayout.extend({
  return Marionette.CollectionView.extend({
    ui: {
      boardList : '.board-list'
    },

    collection: new Backbone.Collection([{
      id  : 4,
      name: 'Underscore',
      value: '1.5.2',
      description : 'teste'
    }, {
      id  : 3,
      name: 'Backbone',
      value: '1.1.0',
      description : 'teste'
    }, {
      id  : 2,
      name: 'Backbone.Marionette',
      value: '1.5.1-bundled',
      description : 'teste'
    }, {
      id  : 1,
      name: 'Bootstrap',
      value: '3.0.3',
      description : 'teste'
    }]),

    childView: Lists,

    onShow: function() {
      $(this.ui.boardList).sortable({
        group: this.ui.boardList,
        animation: 150
      });
    },
  });
});
