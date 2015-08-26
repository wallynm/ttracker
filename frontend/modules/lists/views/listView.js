define(['frontend/core/common/compositeView', 'frontend/modules/tasks/models/tasks', 'frontend/modules/tasks/views/taskView', 'frontend/modules/tasks/views/emptyView', 'text!frontend/modules/lists/templates/list.html'],
function(CompositeView, tasksCollection, tasksView, EmptyView, tpl) {

  return CompositeView.extend({
    className: 'board-list pull-left',
    template: _.template(tpl),
    collection: new tasksCollection(),
    childView: tasksView,
    emptyView: EmptyView,
    childViewContainer: '.content',

    ui: {
      addtask : '.footer'
    },

    events: {
      'click @ui.addtask' : 'addtask'
    },

    addtask: function() {
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
