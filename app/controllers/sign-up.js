import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  cities: Ember.computed.alias('model.cities'),
  states: Ember.computed.alias('model.states'),

  actions: {

    selectCity (city) {
      this.set('city', city);
    },

    selectState (state) {
      this.set('state', state);
    },

    /**
     * First create a gatekeeper account with the email and username being the same.
     * Then save the user.
     */
    createAccount () {

      let {email, password} = this.getProperties (['email', 'password']);
      let account = this.get ('store').createRecord ('account', {"username": email, password, email});
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
