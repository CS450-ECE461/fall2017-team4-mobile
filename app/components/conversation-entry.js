import Component from '@ember/component';

export default Component.extend({
  message: '',
  companyName: '',
  conversation: null,
  dotsClicked: false,

  classNames: ['conversation-entry'],

  onArrowClicked: () => {},

  actions: {
    clickArrow() {
      this.get('onArrowClicked')(this.get('conversation'))
    },

    clickDots() {
      this.toggleProperty('dotsClicked')
    }
  }
});
