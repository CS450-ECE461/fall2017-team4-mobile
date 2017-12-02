import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  text: DS.attr(),
  city: DS.belongsTo('city'),
  state: DS.belongsTo('state'),

  location: computed('city', 'state', function() {
    let city = this.get('city');
    let state = this.get('state');

    return `${city}, ${state}`;
  })
});
