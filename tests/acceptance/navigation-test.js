import { test } from 'qunit';
import moduleForAcceptance from 'job-search-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | navigation');

test('visiting /navigation', function(assert) {
  visit('/welcome');

  andThen(function() {
    assert.equal(currentURL(), '/welcome');
  });
});
