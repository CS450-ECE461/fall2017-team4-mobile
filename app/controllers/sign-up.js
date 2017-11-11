import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createAccount () {
      let {email, username, password} = this.getProperties (['email', 'username', 'password']);
      let adapterOptions = {signIn: true};
    },
    signUpClick(){

    }
  },
});
