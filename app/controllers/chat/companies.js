import Controller from '@ember/controller';

export default Controller.extend({
  searchBarText: "Search Saved Companies",

  actions: {
    onSearchBarInput(value) {
      console.log(value)
    }
  }
});
