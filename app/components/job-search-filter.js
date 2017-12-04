import Component from '@ember/component';

export default Component.extend({
  classNames: ['job-search-filter'],
  searchText: '',
  searchLocation: '',
  image: '',

  clickRemove: null,
  clickOpen: null,

  actions: {
    onClickRemove() {
      this.get('clickRemove')();
    },

    onClickOpen() {
      this.get('clickOpen')();
    }
  }
});
