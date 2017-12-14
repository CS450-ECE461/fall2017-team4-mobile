import { moduleForComponent, test, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chat-message', 'Integration | Component | chat message', {
  integration: true,
  beforeEach: function(){
    this.inject.service('store');
    this.message = this.get('store').createRecord('message', { timestamp: "Mon Dec 11 2017 19:53:33 GMT" })
  }
});

test('it renders', function(assert) {
  this.render(hbs`{{chat-message}}`);

  assert.equal(this.$().text().trim(), 'Invalid Invalid Date');
});

skip('it renders with time', function(assert) {
  this.render(hbs`{{chat-message message=message}}`);

  assert.equal(this.$().text().trim(), 'Mon 2:53 PM');
});
