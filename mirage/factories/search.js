import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  text() {
    return faker.commerce.department();
  },

  location() {
    return (faker.address.city() + ", " + faker.address.stateAbbr());
  }
});
