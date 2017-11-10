import DS from 'ember-data';

export default DS.Model.extend({
  skills: DS.hasMany(),
  occupations: DS.hasMany(),
  education: DS.hasMany(),
  experience: DS.hasMany(),
  about: DS.attr('string'),
  headline: DS.attr(),
  birthdate: DS.attr('string')
});
