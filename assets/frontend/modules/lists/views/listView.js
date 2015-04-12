define(['text!frontend/modules/lists/templates/list.html', 'frontend/modules/lists/models/list', 'frontend/modules/issues/views/issueView'],
function(tpl, Model, IssuesView) {

  return Marionette.CollectionView.extend({
    className: 'board-list pull-left',
    template: _.template(tpl),
    childView: IssuesView,
    initialize: function(){
      this.collection = new Backbone.Collection([{
        id  : 4,
        title: chance.sentence({words: chance.natural({min: 1, max: 5}) }),
        date: chance.birthday({string: true}),
        description : chance.sentence(),
        tags: chance.hashtag() + ' ' + chance.hashtag() + ' ' + chance.hashtag() + ' ' + chance.hashtag()
      }, {
        id  : 3,
        title: chance.sentence({words: chance.natural({min: 1, max: 5}) }),
        date: chance.birthday({string: true}),
        description : chance.sentence(),
        tags: chance.hashtag() + ' ' + chance.hashtag() + ' ' + chance.hashtag() + ' ' + chance.hashtag()
      }, {
        id  : 2,
        title: chance.sentence({words: chance.natural({min: 1, max: 5}) }),
        date: chance.birthday({string: true}),
        description : chance.sentence(),
        tags: chance.hashtag() + ' ' + chance.hashtag() +  ' ' + chance.hashtag() + ' ' + chance.hashtag()
      }, {
        id  : 1,
        title: chance.sentence({words: chance.natural({min: 1, max: 5}) }),
        date: chance.birthday({string: true}),
        description : chance.sentence(),
        tags: chance.hashtag() + ' ' + chance.hashtag() + ' ' + chance.hashtag() + ' ' + chance.hashtag()
      }]);
    },

    model: new Model(),
  });
});
