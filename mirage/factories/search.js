import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  text() {
    return faker.commerce.department();
  },

  city() {
    return faker.address.city();
  },

  state() {
    return faker.address.stateAbbr();
  }
});
