import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:detailed-search', 'Unit | Controller | detailed search', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: [
    'controller:application',
    'controller:detailed-search.search-results',
    'controller:chat.detailed-search.searches'
  ]
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
