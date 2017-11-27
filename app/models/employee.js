import DS from 'ember-data';

export default DS.Model.extend({
  company: DS.belongsTo(),
  name: DS.attr(),
  phonenumber: DS.attr(),
  title: DS.attr(),
  image: DS.attr()
});
