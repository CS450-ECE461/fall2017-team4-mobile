import DS from 'ember-data';

export default DS.Model.extend({
  icon: DS.attr(),
  name: DS.attr(),
  title: DS.attr(),
  location: DS.attr(),
  start: DS.attr(),
  end: DS.attr(),
  description: DS.attr()
});
