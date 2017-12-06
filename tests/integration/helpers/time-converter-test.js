
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('time-converter', 'helper:time-converter', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', undefined);

  this.render(hbs`{{time-converter inputValue}}`);

  assert.equal(this.$().text().trim(), 'Inv,alid Da,te');
});
