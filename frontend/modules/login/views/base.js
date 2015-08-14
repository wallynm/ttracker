define(['text!frontend/modules/login/templates/base.html', ],
  function(tpl) {
  return Marionette.ItemView.extend({
    template : _.template(tpl),
    className : 'login-form',

    events : {
      'click #btn-login' : 'login',
      // 'click .github-passport' : 'checkCredentials',
    },

    ui: {
      loginEmail: '#login [name=email]',
      loginPass: '#login [name=pass]',

      registerUser: '#register [name=user]',
      registerEmail: '#register [name=email]',
      registerPass: '#login [name=pass]',

      rememberEmail: '#register [name=email]',
    },

    initialize : function() {
      var self = this;
      self.logged = window.App.User.get('logged');
    },

    login: function() {

      // Configures the login data
      App.User.set({
        email : this.ui.loginEmail.val(),
        pass : this.ui.loginPass.val()
      });

      if (this.validateLogin()) {
        App.User.login();
      }
    },

    /**
     * Validates the inputs on the login page are all filled
     * @return {Bool} if the validation pass just return true
     */
    validateLogin : function() {
      var self = this;
      var check = true;

      if (_.isEmpty(App.User.get('email'))) {
        self.showTooltip(self.ui.loginEmail, 'Teste');
        check = false;
      }

      if (_.isEmpty(App.User.get('pass'))) {
        self.showTooltip(self.ui.loginPass, 'Teste');
        check = false;
      }

      return check;
    },

    /**
     * This method renders the tooltips into the login view
     * @param  {[type]} el  [description]
     * @param  {[type]} msg [description]
     * @return {[type]}     [description]
     */
    showTooltip : function(el, msg) {
      el.tooltip({
        title: msg,
        placement: 'right',
        trigger: 'manual'
      }).tooltip('show');

      setTimeout(function(){
        el.tooltip('hide');
      }, 3000);
    },

    // checkCredentials : function() {
    //   popupWindow('/auth/github', 'Login', 900, 700);
    // },

    checkCredentialss : function() {
      window.App.User.set({
        logged : true,
        facebookID : 5732544234,
        firstName : 'Wallysson',
        lastName : 'Nunes',
        college : 'Puc São Gabriel',
        state: 'Minas Gerais',
        email : 'wally.nm@gmail.com',
      }).save();

      App.Router.navigate('#boards', {trigger: true});
    },

    onRender : function() {
      $('#login-content').removeClass('hide');
    },

    onShow : function() {}
  });
});
