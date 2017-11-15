import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    signOut () {
      this.get ('gatekeeper').signOut ().then (() => {
        this.replaceRoute ('sign-in');
      });
    },

    saveProfile() {
      let profile = this.get('store').createRecord('blah', {"about": "I like cheese"});
      profile.save();
    }
  }
});
