import Controller from '@ember/controller';

export default Controller.extend({
  searchBarText: "Search Saved Jobs",

  actions: {
    onSearchBarInput(value) {
      console.log(value)
    }
  }
});
