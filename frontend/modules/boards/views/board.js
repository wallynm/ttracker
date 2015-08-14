define(['frontend/core/common/collectionView', 'frontend/modules/lists/views/listView', 'frontend/modules/lists/views/emptyView', 'frontend/modules/lists/models/lists'],
function(CollectionView, EmptyView, Lists, ListsCollection) {
  //  return PanelLayout.extend({
  return CollectionView.extend({
    ui: {
      boardList : '.board-list'
    },

    collection: new ListsCollection(),
    childView: Lists,
    emptyView: EmptyView,

    fetch: function() {
      return this.collection.fetch();
    },

    onShow: function() {
      $('.board-list .content').sortable({
        group: '.board-list',
        animation: 150
      });
    },
  });
});
