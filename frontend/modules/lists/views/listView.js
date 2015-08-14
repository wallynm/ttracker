define(['frontend/core/common/compositeView', 'frontend/modules/issues/models/issues', 'frontend/modules/issues/views/issueView', 'frontend/modules/issues/views/emptyView', 'text!frontend/modules/lists/templates/list.html'],
function(CompositeView, IssuesCollection, IssuesView, EmptyView, tpl) {

  return CompositeView.extend({
    className: 'board-list pull-left',
    template: _.template(tpl),
    collection: new IssuesCollection(),
    childView: IssuesView,
    emptyView: EmptyView,
    childViewContainer: '.content',

    ui: {
      addIssue : '.footer'
    },

    events: {
      'click @ui.addIssue' : 'addIssue'
    },

    addIssue: function() {
      this.collection.add({
        id: chance.hash({length: 10}),
        title: chance.sentence({words: chance.natural({min: 1, max: 5}) }),
        description: chance.sentence(),
        tags: chance.hashtag() + ' ' + chance.hashtag() + ' ' + chance.hashtag() + ' ' + chance.hashtag()
      }).save();
    },

    onAddChild: function(childView) {
      $('.board-list .content').sortable({
        group: '.board-list',
        animation: 150
      });
    },

    onShow: function(childView) {
      $('.board-list .content').sortable({
        group: '.board-list',
        animation: 150
      });
    },

    fetch: function() {
      return this.collection.fetch();
    }

  });
});
