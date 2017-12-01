
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('icon-asset', 'helper:icon-asset', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{icon-asset inputValue}}`);

  assert.equal(this.$().text().trim(), 'https://s3-us-west-1.amazonaws.com/waldojobs-dev/app-assets/icons/1234');
});
