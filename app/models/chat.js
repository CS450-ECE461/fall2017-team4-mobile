import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo(),
  employee: DS.belongsTo(),
  messages: DS.hasMany()
});
