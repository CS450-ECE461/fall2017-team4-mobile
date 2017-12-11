import { test } from 'qunit';
import moduleForAcceptance from 'job-search-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('The user can log in', function(assert) {
  visit('/sign-in');

  andThen(function() {
    assert.equal(currentURL(), '/sign-in');
    fillIn("[type=email]", "test@test.com");
    fillIn("[type=password]", "test");
    //click("[type=submit]");
  });
});
