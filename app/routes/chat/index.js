import Gatekeeper from 'ember-cli-gatekeeper';

export default Gatekeeper.User.AuthenticatedRoute.extend({
  beforeModel() {
    this.replaceWith('chat.jobs');
  }
});
