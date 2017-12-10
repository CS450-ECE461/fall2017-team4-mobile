import { test } from 'qunit';
import moduleForAcceptance from 'job-search-app/tests/helpers/module-for-acceptance';
import Ember from 'ember';

let GatekeeperStub = Ember.Service.extend({
  on() { },
  off() { },
  isSignedIn: true
});

moduleForAcceptance('Acceptance | login',  {
  beforeEach() {
    this.application.register('service:gatekeeperStub', GatekeeperStub);
    this.application.inject('route:search', 'gatekeeper', 'service:gatekeeperStub');
    this.application.inject('route:detailed-search', 'gatekeeper', 'service:gatekeeperStub');
  }
});

test('A user can view profile based jobs', function(assert) {
  visit('/search');

  andThen(function() {
    assert.equal(currentURL(), '/search');
    // assert.equal(Ember.$(".job-entry:visible").length, 0)
    click("#recommended-jobs-open-close");
    // andThen() {
    //     assert.equal(Ember.$(".job-entry:visible").length, 2)
    // }
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
