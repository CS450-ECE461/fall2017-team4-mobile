import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('conversation-entry', 'Integration | Component | conversation entry', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{conversation-entry}}`);

  assert.equal(this.$().text().trim(), '');
});
