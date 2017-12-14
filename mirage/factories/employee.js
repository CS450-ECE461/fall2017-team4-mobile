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
    // return faker.image.nature();
    return "https://avatars0.githubusercontent.com/ml/4?s=120&v=4";
  }
});
