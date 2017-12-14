import { moduleForComponent, test } from 'ember-qunit';
import { click } from 'ember-native-dom-helpers';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('top-header', 'Integration | Component | top header', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{search-bar}}`);

  assert.equal(this.$().text().trim(), '');
});

test('Clicking the left and right buttons triggers the callbacks', function(assert) {

  this.on('clickLeftButton', () => {
    assert.step("Left button callback called!");
  });

  this.on('clickRightButton', () => {
    assert.step("Right button callback called!");
  });

  this.render(hbs`{{top-header
    title="Job Search"
    clickLeft=(action 'clickLeftButton')
    leftText="Left"
    clickRight=(action 'clickRightButton')
    rightText="Right"
  }}`);

  Ember.run(() => {
    click(".filter");
    click(".back");
  })

  assert.verifySteps(['Right button callback called!', 'Left button callback called!'])
});
