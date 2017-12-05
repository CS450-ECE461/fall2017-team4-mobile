import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  router: Ember.inject.service(),

  classNames: ['job-entry'],
  itemSaved: false,
  job: null,

  actions: {
    toggleSaved() {
      this.toggleProperty('itemSaved')
    },

    viewJobDetails() {
      this.get('router').transitionTo('job-detail', this.get('job'));
    },

    viewCompanyDetails() {
      this.get('router').transitionTo('company-detail', this.get('job.company'));
    }
  }
});
