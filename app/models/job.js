import DS from 'ember-data';

export default DS.Model.extend({
  logo: DS.attr(),
  name: DS.attr(),
  employees: DS.hasMany(),
  location: DS.attr(),
  description: DS.attr(),
  requirements: DS.attr()
});
