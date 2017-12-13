
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('time-converter', 'helper:time-converter', {
  integration: true
});

// Replace this with your real tests.
test('it converts dates properly', function(assert) {
  this.set('inputDate', "Mon Dec 11 2017 14:53:33 GMT-0500 (EST)");

  this.render(hbs`{{time-converter inputDate}}`);

  assert.equal(this.$().text().trim(), 'Mon 2:53 PM');
});
