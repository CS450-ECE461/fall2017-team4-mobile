import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  actions: {
    createAccount () {

      let {email, username, password} = this.getProperties (['email', 'username', 'password']);
      let account = this.get ('store').createRecord ('account', {username, password, email});
      let adapterOptions = {signIn: false};

      account.save ({adapterOptions}).then (account => {
        let id = (account.get('id'));
        let {firstname, lastname, city, state, radius} =  this.getProperties(['firstname','lastname','city','state','radius']);

        let user = this.get('store').createRecord('user', {firstname, lastname, city, state, radius, id});
        user.save();
        this.transitionToRoute('profile');
      }).catch (reason => {
        Ember.Logger.log(reason);
      });
    }
  },
});
