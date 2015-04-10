define(['text!frontend/modules/boards/templates/board.html', 'frontend/core/layouts/panel', 'frontend/modules/boards/views/board', 'Sortable'],
function(tpl, Panel, Board) {

  return Panel.extend({
    template : _.template(tpl),

    ui : {
      panelContent : '.body',
      panelTitle : '.header .title',
      issues : '.issue'
    },

    regions: {
      panelContent: '@ui.panelContent',
    },

    fetch : function() {
      var self = this;
      setTimeout(function() {
        alert('fetch resolve');
        self.promisse.resolve();
      }, 500);

      return self.promisse;
    },

    onRender : function() {
      //this.ui.panelTitle.text('Teste');
      this.panelContent.show(new Board());
    }
  });
});
