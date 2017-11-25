
import Gatekeeper from 'ember-cli-gatekeeper';

export default Gatekeeper.User.AuthenticatedRoute.extend({
  model() {
    return this.get('store').findRecord('user', this.get('gatekeeper.currentUser.id')).then((user) => {
      return user.get('profile');
    })
  }
});
