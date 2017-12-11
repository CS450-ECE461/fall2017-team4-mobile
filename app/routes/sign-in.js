import Gatekeeper from 'ember-cli-gatekeeper';

export default Gatekeeper.SignInRoute.extend ({

  // If the user is logged in, "gatekeeper_user_token" will be in localStorage.
  // Redirect the user to the profile page
  beforeModel() {
    if (window.localStorage.getItem("gatekeeper_user_token") != null){
      this.replaceWith('profile');
    }
  }
});
