import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  model() {
    return Ember.RSVP.hash({
        job: {id: "1"},//this.get('store').findRecord('job', params.id),
        employees: this.get('store').query('employee', { id: "124" })
    });
  }
});
