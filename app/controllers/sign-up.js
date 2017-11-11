import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createAccount () {
      let {email, username, password} = this.getProperties (['email', 'username', 'password']);
      let account = this.get ('store').createRecord ('account', {username, password, email});
      let adapterOptions = {signIn: true};

      account.save ({adapterOptions}).then (account => {
        Ember.Logger.log(account)
      }).catch (reason => {
        Ember.Logger.log(reason)
      });
    },

    signUpClick(){

    }
  },
});
