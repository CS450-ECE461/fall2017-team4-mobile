import Gatekeeper from 'ember-cli-gatekeeper';
import RSVP from 'rsvp';

export default Gatekeeper.User.AuthenticatedRoute.extend({
  model() {
    return RSVP.hash({
      searches: this.get('store').findAll('search')
    });
  }
});
