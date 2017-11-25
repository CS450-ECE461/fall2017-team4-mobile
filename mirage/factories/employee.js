import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.name.findName();
  },

  phonenumber() {
    return faker.phone.phoneNumber();
  },

  title() {
    return faker.name.jobTitle();
  },

  image() {
    return faker.image.animals();
  }
});
