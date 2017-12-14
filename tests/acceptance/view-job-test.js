import { test } from 'qunit';
import moduleForAcceptance from 'job-search-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | view job');

test('Clicking on "View Job Description" from "Jobs" takes user to the job description page', function(assert) {
  openRoutes('chat', 'chat.jobs', 'job-detail');

  visit('/chat/jobs');

  andThen(function() {
    click('.chat-viewport .view-job:first');
    andThen(() => assert.equal(currentURL(), '/job-detail/1'))
  });
});

test('Clicking on "View Job Description" from "Search Results" takes user to the job description page', function(assert) {
  openRoutes('detailed-search', 'detailed-search.search-results', 'job-detail');

  visit('/detailed-search/search-results');

  andThen(function() {
    click('.search-result-list .view-job:first');
    andThen(() => assert.equal(currentURL(), '/job-detail/1'))
  });
});

test('Clicking on "View Job Description" from "Recommended Jobs" takes user to the job description page', function(assert) {
  openRoutes('search', 'job-detail');

  visit('/search');

  andThen(function() {
    click('#recommended-jobs-open-close');
    andThen(() => {
      click('#recommended-jobs-body .view-job:first');
      andThen(() => assert.equal(currentURL(), '/job-detail/1'));
    });
  });
});
