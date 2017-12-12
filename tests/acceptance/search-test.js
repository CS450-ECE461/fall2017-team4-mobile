import { test } from 'qunit';
import moduleForAcceptance from 'job-search-app/tests/helpers/module-for-acceptance';
import Ember from 'ember';

moduleForAcceptance('Acceptance | search',  {
  beforeEach() {
    openAllRoutes();
  }
});

test('A user can view profile based jobs', function(assert) {
  visit('/search');

  andThen(function() {
    assert.equal(currentURL(), '/search');
    assert.equal(Ember.$(".job-entry:visible").length, 0)
    click("#recommended-jobs-open-close");
    andThen(function() {
        assert.equal(Ember.$(".job-entry:visible").length, 2)
    })
  });
});

test('A user can navigate to the search-details page', function(assert) {
  visit('/search');

  andThen(function() {
    assert.equal(currentURL(), '/search');
    click(".search-bar")
    andThen(function() {
      assert.equal(currentURL(), '/detailed-search/searches');
    })
  });
});
