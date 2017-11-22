import DS from 'ember-data';

export default DS.Model.extend({
  skills: DS.hasMany('skill'),
  occupations: DS.hasMany('occupation'),
  education: DS.hasMany('education'),
  experience: DS.hasMany('experience'),
  about: DS.attr('string'),
  birthdate: DS.attr('string')
});
