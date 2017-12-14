import Gatekeeper from 'ember-cli-gatekeeper';

export default Gatekeeper.User.AuthenticatedRoute.extend({
  model(params) {
    return {id: params.id}
  }
});
