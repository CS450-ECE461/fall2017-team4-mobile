import DS from 'ember-data';

export default DS.Model.extend({
  company: DS.belongsTo(),
  title: DS.attr(),
  employees: DS.hasMany(),
  location: DS.attr(),
  description: DS.attr(),
  requirements: DS.attr()
});
