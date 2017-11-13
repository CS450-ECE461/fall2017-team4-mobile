// app/controllers/sign-in.js

import Ember from 'ember';
import Gatekeeper from 'ember-cli-gatekeeper';

export default Gatekeeper.SignInController.extend({
    actions: {
      signInComplete(){
        Ember.Logger.log("yay!!!");
      }
    }
});
