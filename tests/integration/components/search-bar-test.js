import { moduleForComponent, test } from 'ember-qunit';
import { fillIn, triggerEvent } from 'ember-native-dom-helpers';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('search-bar', 'Integration | Component | search bar', {
  integration: true
});

test('Searching calls action and sets value', function(assert) {
  const SEARCH_VALUE = "Search Value";

  this.on('typeIntoSearchBar', (value) => {
    assert.equal(value, SEARCH_VALUE);
  })

  this.set('typedValue', '');

  this.render(hbs`{{search-bar
    onInput=(action 'typeIntoSearchBar')
    value=typedValue
  }}`);

  Ember.run(() => {
    fillIn(".search-bar input", SEARCH_VALUE);
    triggerEvent(".search-bar input", "keyup");
  })

  assert.equal(this.get('typedValue'), SEARCH_VALUE)
});
