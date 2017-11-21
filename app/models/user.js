import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr(),
  lastname: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  city: DS.attr(),
  state: DS.attr(),
  radius: DS.attr()
});
