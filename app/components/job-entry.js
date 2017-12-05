import Component from '@ember/component';

export default Component.extend({
  classNames: ['job-entry'],
  itemSaved: false,

  actions: {
    toggleSaved() {
      this.toggleProperty('itemSaved')
    }
  }
});
