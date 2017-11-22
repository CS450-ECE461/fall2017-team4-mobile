import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('profile');
  this.route('sign-in');
  this.route('sign-up');
  this.route('search');
  this.route('chat', function() {
    this.route('jobs');
    this.route('chat');
    this.route('companies');
    this.route('requests');
  });
  this.route('notifications');
});

export default Router;
