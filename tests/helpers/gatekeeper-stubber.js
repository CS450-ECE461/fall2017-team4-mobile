import { registerAsyncHelper } from '@ember/test';

let GatekeeperStub = Ember.Service.extend({
  on() { },
  off() { },
  isSignedIn: true
});

let openRoutes = registerAsyncHelper('openRoutes', function(application) {
  application.register('service:gatekeeperStub', GatekeeperStub);

  let routes = [...arguments];
  routes.forEach(route => {
      application.inject(`route:${route}`, 'gatekeeper', 'service:gatekeeperStub');
  })
});

let openAllRoutes = registerAsyncHelper('openAllRoutes', function(application) {
  application.register('service:gatekeeperStub', GatekeeperStub);
  application.inject('route', 'gatekeeper', 'service:gatekeeperStub');
});

export default {
  openAllRoutes,
  openRoutes
};
