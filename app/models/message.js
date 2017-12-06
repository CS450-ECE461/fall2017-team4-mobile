import DS from 'ember-data';

export default DS.Model.extend({
  fromId: DS.attr(),
  body: DS.attr(),
  conversationId: DS.attr(),
  timestamp: DS.attr("date")
});
