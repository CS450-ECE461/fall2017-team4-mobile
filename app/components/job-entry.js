import Component from '@ember/component';

export default Component.extend({
  router: Ember.inject.service(),

  classNames: ['job-entry'],
  itemSaved: false,
  job: null,

  actions: {
    toggleSaved() {
      this.toggleProperty('itemSaved')
    },

    viewCompanyDetails(jobId) {
      this.get('router').transitionTo('job-detail', this.get('job'));
    }
  }
});
