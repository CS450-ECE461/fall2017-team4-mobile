import Route from '@ember/routing/route';

export default Route.extend({
  /**
   * For each conversation, get the first message of the conversation, and add both
   * the conversation and the first message to the `combined` array and return that array
   */
  //TODO: Make the userId be the actual current user
  model() {
    return this.get('store').query('chat', {userId: this.get('gatekeeper.currentUser.id')})
  }
});
