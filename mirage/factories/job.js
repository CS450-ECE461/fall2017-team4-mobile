import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  company() {
    return faker.company.companyName();
  },

  title() {
    return faker.commerce.department();
  },

  location() {
    return (faker.address.city() + ", " + faker.address.state());
  }
});
