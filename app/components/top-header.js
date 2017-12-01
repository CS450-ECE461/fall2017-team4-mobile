import Component from '@ember/component';

export default Component.extend({
  classNames: ['top-header'],
  title: '',

  clickBack: null,
  clickFilter: null,

  actions: {
    backAction() {
      this.get('clickBack')();
    },

    filterAction() {
      this.get('clickFilter')();
    }
  }
});
