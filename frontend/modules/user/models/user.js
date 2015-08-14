define(function() {
  return Backbone.Model.extend({
    defaults:{
      _id: null,
      logged: null,
      user: null,
      email: null,
      pass: null
    },

    login : function() {
      var self = this;
      return $.post('/api/users/login', this.toJSON(), function(data){
        data.logged = true;
        self.set(data);
      });
    },

    checkSession : function() {
      var self = this;
      return $.get('/api/users/session', function(data){
        self.set(data);
      });
    },

    isLogged : function() {
      return this.get('logged');
    }
  });
});
