import Component from '@ember/component';

export default Component.extend({
  value: '',
  classNames: ['search-bar'],
  placeholder: 'Search',

  onInput: () => {},

  actions: {
      onKeyUp() {
        this.get('onInput')(this.get('value'));
      }
  }
});
