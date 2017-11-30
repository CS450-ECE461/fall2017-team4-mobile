import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:chat', 'Unit | Controller | chat', {
  // Specify the other units that are required for this test.
  needs: [
    'controller:application',
    'controller:chat.chat',
    'controller:chat.companies',
    'controller:chat.jobs',
    'controller:chat.requests'
  ]
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
