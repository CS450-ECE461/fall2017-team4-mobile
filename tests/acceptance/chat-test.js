import { test } from 'qunit';
import moduleForAcceptance from 'job-search-app/tests/helpers/module-for-acceptance';

let uuid = "91e4d46d-e3a1-4178-b632-ffc2a525119a";

moduleForAcceptance('Acceptance | chat', {
  beforeEach() {
    openRoutes('conversation');
  }
});

test('visiting /conversation', function(assert) {
  visit(`/conversation/${uuid}`);

  andThen(function() {
    assert.equal(currentURL(), `/conversation/${uuid}`);
  });
});
