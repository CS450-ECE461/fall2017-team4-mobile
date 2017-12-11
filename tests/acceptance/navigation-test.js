import { test } from 'qunit';
import moduleForAcceptance from 'job-search-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | navigation');

test('Navigating to welcome screens while logged in takes user to profile page', function(assert) {
  login();
  visit("/welcome");

  andThen(function() {
    assert.equal(currentURL(), '/profile');
  });
});
