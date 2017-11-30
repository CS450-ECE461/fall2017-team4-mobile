import Controller from '@ember/controller';
import Ember from "ember";

export default Controller.extend({
  searchBarText: "Search Saved Chat",

  actions: {
    onSearchBarInput(value) {
      Ember.Logger.log(value)
    },

    onClickFilter() {
      Ember.Logger.log("I'm filtering!!")
    }
  }
});
