import Controller from '@ember/controller';

export default Controller.extend({
  searchBarText: "Search Saved Chat",

  actions: {
    onSearchBarInput(value) {
      console.log(value)
    },

    onClickFilter() {
      console.log("I'm filtering!!")
    }
  }
});
