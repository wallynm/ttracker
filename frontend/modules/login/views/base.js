define(['text!frontend/modules/login/templates/base.html'],
  function(tpl) {
  return Marionette.ItemView.extend({
    template: _.template(tpl),
    className: 'login-page',

    events: {
      'click @ui.loginButton': 'login',
      'click @ui.registerButton': 'register',
      'click @ui.rememberButton': 'remember',
      'submit @ui.form': 'formSubmit'
    },

    ui: {
      form: 'form',
      loginButton: '#btn-login',
      registerButton: '#btn-register',
      rememberButton: '#btn-remember',
      loginEmail: '.form-login [name=email]',
      loginPass: '.form-login [name=pass]',
      registerUser: '.form-register [name=user]',
      registerEmail: '.form-register [name=email]',
      registerPass: '.form-register [name=pass]',
      rememberEmail: '.form-remember [name=email]',
    },

    initialize: function() {
      var self = this;
      self.logged = window.App.User.get('logged');
      this.stickit(window.App.User);
    },

    /**
     * Verify the user credentials and redirects the user to the dashboard
     * @author Wallysson Nunes
     * @return {Void}
     */

    redirectDashboard: function() {
      var self = this;
      App.User.login()
      .done(function() {
        if (App.User.get('logged')) {
          App.Router.navigate('#boards', {trigger: true});
        } else {
          self.showTooltip(self.ui.loginEmail, 'Usuário ou senha inválidos');
          self.ui.loginPass.val('');
        }
      });
    },

    formSubmit: function() {
      this.login();
      return false;
    },

    /**
     * Sets the model with the formdata and tries to login user
     * @author Wallysson Nunes
     * @return {Void}
     */
    login: function() {
      var self = this;

      // Configures the login data
      App.User.set({
        email: this.ui.loginEmail.val(),
        pass: this.ui.loginPass.val()
      });

      if (this.validateLogin()) {
        self.redirectDashboard();
      }
    },

    /**
     * Register new user with form data and if
     * successfull redirect user to the dashboard
     */
    register: function() {
      var self = this;
      $.when(this.validateEmailRegistered(), this.validateRegister())
      .then(function(mailRequest, formValidation) {

        // Checks if all the data succeeds them register and logs the user
        if (!mailRequest[0].registered && formValidation) {
          App.User.set({
            user: self.ui.registerUser.val(),
            email: self.ui.registerEmail.val(),
            pass: self.ui.registerPass.val()
          });

          $.when(App.User.register())
          .then(self.redirectDashboard());
        }
      });
    },

    /**
     * Checks if the user mail already registered on the system
     *
     * @return {Promisse} Returns a promise for the mail check
     */
    validateEmailRegistered: function() {
      var self = this;
      return $.get('/api/users/emailcheck/' + this.ui.registerEmail.val())
      .done(function(data) {
        if (data.registered) {
          self.showTooltip(self.ui.registerEmail, 'Email já registrado, por favor preencha outro');
        }
      });
    },

    validateRegister: function() {
      var self = this;
      var check = true;

      return $.Deferred(function(dfd) {
        if (_.isEmpty(self.ui.registerUser.val())) {
          self.showTooltip(self.ui.registerUser, 'Preencha um email');
          check = false;
        }

        if (_.isEmpty(self.ui.registerEmail.val())) {
          self.showTooltip(self.ui.registerEmail, 'Preencha um email');
          check = false;
        }

        if (_.isEmpty(self.ui.registerPass.val())) {
          self.showTooltip(self.ui.registerPass, 'Preencha uma senha');
          check = false;
        }
        dfd.resolve(check);
      }).promise();
    },

    /**
     * Validates the inputs on the login page are all filled
     *
     * @return {Bool} if the validation pass just return true
     */
    validateLogin: function() {
      var self = this;
      var check = true;

      if (_.isEmpty(App.User.get('email'))) {
        self.showTooltip(self.ui.loginEmail, 'Preencha um email');
        check = false;
      }

      if (_.isEmpty(App.User.get('pass'))) {
        self.showTooltip(self.ui.loginPass, 'Preencha uma senha');
        check = false;
      }

      return check;
    },

    /**
     * This method renders the tooltips into the login view
     */
    showTooltip: function(el, msg) {
      el.tooltip({
        title: msg,
        placement: 'right',
        trigger: 'manual'
      }).tooltip('show');

      setTimeout(function() {
        el.tooltip('hide');
      }, 3000);
    },

    // checkCredentials: function() {
    //   popupWindow('/auth/github', 'Login', 900, 700);
    // },

    checkCredentialss: function() {
      window.App.User.set({
        logged: true,
        facebookID: 5732544234,
        firstName: 'Wallysson',
        lastName: 'Nunes',
        college: 'Puc São Gabriel',
        state: 'Minas Gerais',
        email: 'wally.nm@gmail.com',
      }).save();

      App.Router.navigate('#boards', {trigger: true});
    },

    onRender: function() {},

    onShow: function() {}
  });
});
