import DS from 'ember-data';

export default DS.Model.extend({
  skills: DS.hasMany(),
  about: DS.attr('string')
  education: DS.attr('string'),
  birthdate: DS.attr('string')
});
