import Component from '@ember/component';

export default Component.extend({
  classNames: ['top-header'],
  title: '',

  clickLeft: null,
  leftText: '',
  clickRight: null,
  rightText: '',

  actions: {
    leftAction() {
      this.get('clickLeft')();
    },

    rightAction() {
      this.get('clickRight')();
    }
  }
});
