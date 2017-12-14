/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'job-search-app',
    environment,
    rootURL: '/',
    defaultLocationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Needed for gateeper to use the gatekeeper 'account' model
        'ds-improved-ajax': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      API: 'http://165.227.76.52:5000'
    },

    cordova: {
      rebuildOnChange: false,
      emulate: false
    },

    gatekeeper: {
     baseUrl: 'http://165.227.76.52:5000/gatekeeper',

     tokenOptions: {
       client_id: '5a02944ad05605078a17da82',
       client_secret: 'eqb16wYXmahv85m5NIPXeiJZDdXZscwlGGABPcBNO7a1mZj0rg_ZB9a_SM705Wcv5OMZVe7B1qO05i8SSjnfWMOAPkfI9n4gKCFeD8GHqu7Vacyhqr6O6bLB5hRXIec0wkpTYDZMSyZh6MbgZn_xhRHTEtIyhyZbNCXUNmWakEI'
     }
   }

  };

  if (environment === 'development') {

    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    ENV.rootURL = '/';
    ENV.locationType = 'none';

    ENV.APP.API = "";
    ENV.gatekeeper.baseUrl = "/gatekeeper";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
