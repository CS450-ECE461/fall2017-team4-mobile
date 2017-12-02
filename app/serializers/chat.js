import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serialize(snapshot, options) {
    console.log(snapshot)
    console.log(options)
  }
});
