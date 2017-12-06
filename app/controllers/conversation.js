import Controller from '@ember/controller';

export default Controller.extend({
  router: Ember.inject.service(),
  message: '',

  actions: {
    sendMessage() {
      this.get('store').createRecord('message', {
        body: this.get('message'),
        fromId: this.get('gatekeeper.currentUser.id'),
        conversationId: this.get('model.conversationId')
      }).save().then(() => {
        this.set('message', "");
        this.get('model.messages').reload()
      });
    },

    backAction() {
      this.transitionToRoute('chat')
    },

    profileAction() {
      console.log("See Profile")
    }
  }
});
