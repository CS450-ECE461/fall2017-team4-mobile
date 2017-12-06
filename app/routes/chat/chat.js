import Route from '@ember/routing/route';

export default Route.extend({
  /**
   * For each conversation, get the first message of the conversation, and add both
   * the conversation and the first message to the `combined` array and return that array
   */
  //TODO: Make the userId be the actual current user
  model() {
    let combined = [];
    return this.get('store').query('chat', {userId: this.get('gatekeeper.currentUser.id')}).then(conversations => {
      conversations.forEach(conversation => {
        let firstMessageId = conversation.hasMany('messages').ids()[0];
        this.get('store').findRecord('message', firstMessageId).then(message => {
          let preview = message.get('content').substr(0,20);
          combined.pushObject({
            conversation: conversation,
            messagePreview: `${preview}${message.get('content').length > 20 ? "..." : ""}`
          })
        })
      })
      return combined;
    })
  }
});
