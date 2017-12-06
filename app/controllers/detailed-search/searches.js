import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  searches: Ember.computed.alias('model.searches'),
  searchType: 'Recent',

  actions: {
    setSearchType(type) {
      this.set('searchType', type);
    }
  }
});
