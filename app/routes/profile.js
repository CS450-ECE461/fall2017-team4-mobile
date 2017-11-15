import Route from '@ember/routing/route';

import Gatekeeper from 'ember-cli-gatekeeper';

export default Route.extend({
  model() {
    return this.get('store').findAll('user');
  }
});
