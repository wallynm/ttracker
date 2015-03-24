define(function () {
  return Backbone.Model.extend({
    localStorage : new Backbone.LocalStorage('user'),

    defaults:{
      id : null,
      logged : null,
      facebookID : null,
      firstName : null,
      lastName :null,
      college : null,
      state: null,
      email : null,
    },

    initialize:function () {
      var self = this;
      var userData = self.localStorage.findAll();

      if(userData.length !== 0){
        self.id = userData[0].id;
        self.fetch().done(function(){
          self.onFetch();
        });
      }
    },

    onFetch : function()
    {
      var self = this;
      if( this.isLogged() ){
        $('#login-content').addClass('hide');
      }
    },

    isLogged : function()
    {
      return this.get('logged');
    }
  });
});
