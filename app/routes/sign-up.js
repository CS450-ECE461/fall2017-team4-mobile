import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      cities: this.get('store').findAll('city'),
      states: this.get('store').findAll('state')
    });
  }
});
