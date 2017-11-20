import DS from 'ember-data';
import config from '../config/environment';
import Ember from 'ember';

/**
 * This adaper users ember-cli-gatekeeper's code for adding a token to every
 * request.
 *
 * NOTE: The majority of this code came from the ember-cli-gatekeeper repository here:
 * https://github.com/onehilltech/ember-cli-gatekeeper/blob/9f6f59f901613430f7e1530554017f37c5b5d66f/addon/-lib/user/adapters/rest.js
 */
export default DS.JSONAPIAdapter.extend({
  router: Ember.inject.service (),

  gatekeeper: Ember.inject.service (),

  host: config.APP.API,

  namespace: Ember.computed ('gatekeeper.client.version', function () {
    return `v${this.getWithDefault ('gatekeeper.client.version', 1)}`;
  }),

  headers: Ember.computed ('gatekeeper.accessToken', function () {
    let accessToken = this.get ('gatekeeper.accessToken.access_token');
    return {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    };
  }),

  handleResponse (status, headers, payload) {
    switch (status) {
      case 403: {
        // There is a problem with our token. Force the user to authenticate
        // again with hopes of resolving the problem.
        this.get ('gatekeeper').forceSignOut (payload.errors.message);
        this._forceUserToSignIn ();

        break;
      }
    }

    return this._super (...arguments);
  },

  _forceUserToSignIn () {
    let owner = Ember.getOwner (this);

    // Get the router so we can transition to te sign-in page. We are going to
    // allow the user to redirect back to the original page after they complete
    // the sign in process.
    let ENV = owner.resolveRegistration ('config:environment');
    let signInRoute = Ember.getWithDefault (ENV, 'gatekeeper.signInRoute', 'sign-in');

    let router = this.get ('router');
    let route = owner.lookup(`route:${signInRoute}`);
    let controllerName = signInRoute;

    if (route && route.controllerName) {
      controllerName = route.controllerName;
    }

    let controller = owner.lookup (`controller:${controllerName}`);
    let currentRouteName = router.get ('currentRouteName');

    controller.set ('redirectTo', currentRouteName);
    router.replaceWith (signInRoute);
  }
});
