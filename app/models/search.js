import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  text: DS.attr(),
  location: DS.attr()
});
