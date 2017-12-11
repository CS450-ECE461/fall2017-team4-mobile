import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      cities: this.get('store').findAll('city'),
      states: this.get('store').findAll('state')
    });
  },

  // If the user is logged in, "gatekeeper_user_token" will be in localStorage.
  // Redirect the user to the profile page
  beforeModel() {
    if (window.localStorage.getItem("gatekeeper_user_token") != null){
      this.replaceWith('profile');
    }
  }
});
