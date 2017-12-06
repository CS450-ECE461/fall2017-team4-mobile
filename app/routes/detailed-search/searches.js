import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      searches: this.get('store').findAll('search')
    });
  }
});
