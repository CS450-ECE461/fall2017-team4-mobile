import Route from '@ember/routing/route';

export default Route.extend({

  // If the user is logged in redirect the user to the profile page
  beforeModel() {
    if (this.get('gatekeeper.isSignedIn')){
      this.replaceWith('profile');
    }
  }
});
