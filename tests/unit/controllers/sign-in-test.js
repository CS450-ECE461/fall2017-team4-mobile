import { moduleFor, test } from 'ember-qunit';
import Service from '@ember/service';

moduleFor('controller:sign-in', 'Unit | Controller | sign in', {
  integration: true,

  beforeEach: function () {
    this.register('service:gatekeeper', Service.extend({}));
    this.inject.service('gatekeeper', { as: 'gatekeeperService' });
  }
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
