
let GatekeeperStub = Ember.Service.extend({
  on() { },
  off() { },
  isSignedIn: true
});

export default function openRoutes(application, args) {
  application.register('service:gatekeeperStub', GatekeeperStub);

  let routes = [...arguments];
  routes.forEach(route => {
      application.inject(`route:${route}`, 'gatekeeper', 'service:gatekeeperStub');
  })
}
