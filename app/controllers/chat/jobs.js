import Controller from '@ember/controller';
import Ember from "ember";

export default Controller.extend({
  searchBarText: "Search Saved Jobs",

  actions: {
    onSearchBarInput(value) {
      Ember.Logger.log(value)
    }
  }
});
