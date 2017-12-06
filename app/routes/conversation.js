import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      conversationId: params.id ,
      messages: this.get('store').query('chat', {id: params.id })
    })
  }
});
