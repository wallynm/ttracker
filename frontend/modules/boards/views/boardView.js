define(['frontend/core/layouts/panel/panel', 'frontend/modules/lists/views/listView', 'text!frontend/modules/boards/templates/board.html', 'Sortable'],
  function( PanelLayout, Lists, tpl ) {
  return PanelLayout.extend({
    template : _.template(tpl),

    onRender : function(){
      var self = this;
      var listBoards = ['a', 'b', 'c'];

      _.each(listBoards, function(boardList){
        self.$el.append(new Lists(boardList).render().el);
      });
    }
  });
});
