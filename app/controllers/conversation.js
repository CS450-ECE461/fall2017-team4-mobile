import Controller from '@ember/controller';

export default Controller.extend({
  message: '',

  actions: {
    sendMessage() {
      this.get('store').createRecord('message', {
        body: this.get('message'),
        fromId: this.get('gatekeeper.currentUser.id'),
        conversationId: this.get('model.conversationId')
      }).save();
    },

    backAction() {
      this.transitionToRoute('chat')
    },

    profileAction() {
      console.log("See Profile")
    }
  }
});
