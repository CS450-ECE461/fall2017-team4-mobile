import Ember from 'ember';
import {default as SignInMixin} from 'ember-cli-gatekeeper/-lib/mixins/sign-in';
import layout from '../templates/components/sign-in';

export default Ember.Component.extend (SignInMixin, {
  layout,
  //== email properties
  emailType: 'email',
  emailPlaceholder: 'Email',
  emailAutoComplete: 'off',

  //== password properties

  passwordPlaceholder: 'Password',
  passwordFloatingLabel: true,

  //== button

  signInText: 'Log In',
  signingInText: 'Logging In...',

  enableShowPassword: true,

  init () {
    this._super (...arguments);

    this.set ('errorMessage', this.get ('gatekeeper.errorMessage'));
  },

  didSignIn () {
    this.get ('signInComplete') ();
  },
});
