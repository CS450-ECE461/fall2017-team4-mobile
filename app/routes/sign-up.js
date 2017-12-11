import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      cities: this.get('store').findAll('city'),
      states: this.get('store').findAll('state')
    });
  },

  // If the user is logged in redirect the user to the profile page
  beforeModel() {
    if (this.get('gatekeeper.isSignedIn')){
      this.replaceWith('profile');
    }
  }
});
