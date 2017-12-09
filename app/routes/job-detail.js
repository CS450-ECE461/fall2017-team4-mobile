import Gatekeeper from 'ember-cli-gatekeeper';

export default Gatekeeper.User.AuthenticatedRoute.extend({
  model() {
    return Ember.RSVP.hash({
        job: {id: "1"},//this.get('store').findRecord('job', params.id),
        employees: this.get('store').query('employee', { id: "124" })
    });
  }
});
