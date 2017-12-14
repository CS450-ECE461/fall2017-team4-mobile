import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  // Routes where we don't want to show the application template
  nonApplicationRoutes: ['sign-in', 'sign-up', 'welcome'],

  /**
   * Return a boolean saying whether or not the application template
   * should be displayed
   */
  showApplicationTemplate: computed('currentRouteName', {
    get() {
      return this.get('nonApplicationRoutes').every(route => this.get('currentRouteName') !== route);
    }
  })
});
