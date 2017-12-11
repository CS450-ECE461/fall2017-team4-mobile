import Gatekeeper from 'ember-cli-gatekeeper';
import Ember from 'ember';

export default Gatekeeper.User.AuthenticatedRoute.extend({
  model() {
    return Ember.RSVP.hash({
        job: {id: "1"},//this.get('store').findRecord('job', params.id),
        employees: this.get('store').query('employee', { id: "124" })
    });
  }
});
