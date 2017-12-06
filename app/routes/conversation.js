import Gatekeeper from 'ember-cli-gatekeeper';
import Ember from 'ember';

export default Gatekeeper.User.AuthenticatedRoute.extend({
  model(params) {
    return Ember.RSVP.hash({
      conversationId: params.id ,
      messages: this.get('store').query('chat', {id: params.id })
    })
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('blah', model.conversationId);
  }
});
