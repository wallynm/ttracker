define(function() {
  return Backbone.Model.extend({
    defaults:{
      _id: null,
      logged: null,
      user: null,
      email: null,
      pass: null
    },

    initialize: function() {
      var self = this;
      if (!_.isUndefined(window.data.user) && !_.isEmpty(window.data.user)) {
        self.set('logged', window.data.user.logged);
        self.set('user', window.data.user.user);
        self.set('email', window.data.user.email);
      }
    },

    login: function() {
      var self = this;
      return $.post('/api/users/login', this.toJSON(), function(data){
        self.set(data);
      });
    },

    logout: function() {
      var self = this;
      self.set(self.defaults);
      return $.post('/api/users/logout');
    },

    register: function(){
      var self = this;
      console.log(this.toJSON());
      return $.post('/api/users/register', this.toJSON(), function(data){
        self.set(data);
      });
    },

    checkSession: function() {
      var self = this;
      return $.get('/api/users/session', function(data){
        self.set(data);
      });
    },

    isLogged: function() {
      return this.get('logged');
    }
  });
});
