import Gatekeeper from 'ember-cli-gatekeeper';

export default Gatekeeper.SignInRoute.extend ({

  // If the user is logged in redirect the user to the profile page
  beforeModel() {
    if (this.get('gatekeeper.isSignedIn')){
      this.replaceWith('profile');
    }
  }
});
