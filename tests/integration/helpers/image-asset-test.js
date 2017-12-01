
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('image-asset', 'helper:image-asset', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{image-asset inputValue}}`);

  assert.equal(this.$().text().trim(), 'https://s3-us-west-1.amazonaws.com/waldojobs-dev/app-assets/images/source/1234');
});
