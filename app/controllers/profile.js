import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    signOut () {
      this.get ('gatekeeper').signOut ().then (() => {
        this.replaceRoute ('sign-in');
      });
    },

    saveProfile() {
      this.get('model.skills').pushObject(this.get('store').createRecord('skill', {"name": "FlubDub"}));
      this.get('model').save();
    }
  }
});
