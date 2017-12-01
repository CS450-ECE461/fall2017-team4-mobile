import Component from '@ember/component';

export default Component.extend({
  imageSrc: '',
  message: '',
  personName: '',
  companyName: '',

  classNames: ['conversation-entry'],

  onDotsClicked: () => {},

  onArrowClicked: () => {},

  actions: {
    clickArrow() {
      this.get('onArrowClicked')()
    },

    clickDots() {
      this.get('onDotsClicked')()
    }
  }
});
