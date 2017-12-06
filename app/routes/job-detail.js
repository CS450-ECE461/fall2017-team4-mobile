import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return Ember.RSVP.hash({
        job: {id: "1"},//this.get('store').findRecord('job', params.id),
        employees: this.get('store').query('employee', { id: "124" })
    });
  }
});
