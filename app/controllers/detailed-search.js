import Controller from '@ember/controller';
import Ember from "ember";

export default Controller.extend({
  appController: Ember.inject.controller('application'),
  resultsController: Ember.inject.controller('detailed-search.search-results'),
  searchesController: Ember.inject.controller('detailed-search.searches'),

  searchBarText: "Job title or company",
  searchValue: '',
  locationText: "Location",
  locationValue: '',

  actions: {
    onClickFilter() {
      Ember.Logger.log("Filtering Job Search");
    },

    onClickBack() {
      Ember.Logger.log("Back Button Clicked");
    },

    onSearchBarInput(value) {
      Ember.Logger.log(value);
    },

    onLocationInput(value) {
      Ember.Logger.log(value);
    }
  }
});
