import Controller from '@ember/controller';

export default Controller.extend({
  appController: Ember.inject.controller('application'),
  resultsController: Ember.inject.controller('detailed-routes.search-results'),
  searchesController: Ember.inject.controller('detailed-routes.searches')
});
