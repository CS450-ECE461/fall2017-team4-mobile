import DS from 'ember-data';

export default DS.Model.extend({
  company: belongsTo(),
  name: DS.attr(),
  phonenumber: DS.attr(),
  title: DS.attr()
});
