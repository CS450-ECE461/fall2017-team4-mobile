import DS from 'ember-data';

export default DS.Model.extend({
  icon: DS.attr('string'),
  name: DS.attr('string'),
  title: DS.attr('string'),
  location: DS.attr('string'),
  start: DS.attr('string'),
  end: DS.attr('string'),
  description: DS.attr('string')
});
