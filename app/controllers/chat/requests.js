import Controller from '@ember/controller';

export default Controller.extend({
  searchBarText: "Search Requests",

  actions: {
    onSearchBarInput(value) {
      console.log(value)
    }
  }
});
