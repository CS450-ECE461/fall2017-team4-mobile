import { moduleFor, test } from 'ember-qunit';
import Service from '@ember/service';

moduleFor('route:profile', 'Unit | Route | profile', {
  needs: ['config:environment','service:gatekeeper']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
