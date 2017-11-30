import Controller from '@ember/controller';
import Ember from "ember";

export default Controller.extend({
  searchBarText: "Search Saved Companies",

  actions: {
    onSearchBarInput(value) {
      Ember.Logger.log(value)
    }
  }
});
