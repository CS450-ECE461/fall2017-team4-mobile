import Controller from '@ember/controller';
import Ember from "ember";

export default Controller.extend({
  appController: Ember.inject.controller('application'),
  resultsController: Ember.inject.controller('detailed-routes.search-results'),
  searchesController: Ember.inject.controller('detailed-routes.searches'),

  searchBarText: "Job title or company",
  searchValue: '',
  locationText: "Location",
  locationValue: '',

  actions: {
    onClickFilter() {
      Ember.logger.log("Filtering Job Search");
    },

    onClickBack() {
      Ember.logger.log("Back Button Clicked");
    },

    onSearchBarInput(value) {
      Ember.logger.log(value);
    }

    onLocationInput(value) {
      Ember.logger.log(value);
    }
  }
});
