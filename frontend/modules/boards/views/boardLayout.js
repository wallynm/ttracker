define(['text!frontend/modules/boards/templates/board.html', 'frontend/core/layouts/panel', 'frontend/modules/boards/views/board', 'Sortable'],
function(tpl, Panel, Board) {

  return Panel.extend({
    template : _.template(tpl),

    ui : {
      panelContent : '.body',
      panelTitle : '.header .title',
      tasks : '.task'
    },

    regions: {
      panelContent: '@ui.panelContent',
    },

    /**
     * O fetch e de extrema importancia, uma vez que ele barra o metodo de render do mesmo
     * @return {[type]} [description]
     */
    fetch : function() {
      var self = this;
      setTimeout(function() {
        // alert('fetch resolve');
        self.promisse.resolve();
      }, 500);

      return self.promisse;
    },

    onRender : function() {
      //this.ui.panelTitle.text('Teste');
      alert('aaaaa')
      this.panelContent.show(new Board());
    }
  });
});
