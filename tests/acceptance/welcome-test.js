import { test } from 'qunit';
import moduleForAcceptance from 'job-search-app/tests/helpers/module-for-acceptance';
import openRoutes from 'job-search-app/tests/helpers/stub-gatekeeper';

moduleForAcceptance('Acceptance | login', {
  afterEach() {
    window.localStorage.clear()
  }
});

test('Going to the app takes user to the welcome page', function(assert) {
  visit('/');

  andThen(() => assert.equal(currentURL(), '/welcome'));
});

test('The user can navigate to the login page from welcome', function(assert) {
  visit('/welcome');

  andThen(function() {
    assert.equal(currentURL(), '/welcome');
    click(".sign-in-button");
    andThen(() => {
      assert.equal(currentURL(), '/sign-in');
    })
  });
});

test('The user can log in', function(assert) {
  visit('/sign-in');

  andThen(function() {
    assert.equal(currentURL(), '/sign-in');
    fillIn("[type=email]", "dogs@cats.com");
    fillIn("[type=password]", "test");
    click("[type=submit]");
    andThen(() => {
      assert.equal(currentURL(), '/profile');
    })
  });
});

test('The user can navigate to the sign up page from welcome', function(assert) {
  visit('/welcome');

  andThen(() => {
    assert.equal(currentURL(), '/welcome');
    click(".sign-up-button");
    andThen(() => {
      assert.equal(currentURL(), '/sign-up');
    })
  });
});

test('Signing up redirects user to sign-in page', function(assert) {
  visit('/sign-up');

  andThen(function() {
    assert.equal(currentURL(), '/sign-up');
    click("#sign-up");
    andThen(() => {
      assert.equal(currentURL(), '/sign-in');
    })
  });
});

test('User can sign out', function(assert) {
  openRoutes(this.application, "profile");

  visit('/profile');

  andThen(function() {
    assert.equal(currentURL(), '/profile');
    click(".settings-button");
    andThen(() => {
      assert.equal(currentURL(), '/sign-in');
    })
  });
});
