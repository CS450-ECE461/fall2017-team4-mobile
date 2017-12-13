import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chat-message', 'Integration | Component | chat message', {
  integration: true,
  beforeEach: function(){
    this.inject.service('store');
    this.message = this.get('store').createRecord('message', { timestamp: "Mon Dec 11 2017 14:53:33 GMT-0500 (EST)" })
  }
});

test('it renders properly', function(assert) {
  this.render(hbs`{{chat-message message=message}}`);

  assert.equal(this.$().text().trim(), 'Mon 2:53 PM');
});
