import { moduleFor, test } from 'ember-qunit';
import Service from '@ember/service';

moduleFor('route:profile', 'Unit | Route | profile', {
  integration: true,

  beforeEach: function () {
    this.register('service:gatekeeper', Service.extend({}));
    this.inject.service('gatekeeper', { as: 'gatekeeperService' });
  }
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
