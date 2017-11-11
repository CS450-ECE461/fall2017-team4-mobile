import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  name() {
    return faker.name.findName();
  },

  email() {
    return faker.internet.email();
  },

  password() {
    return faker.internet.password();
  },

  city() {
    return faker.address.city();
  },

  state() {
    return faker.address.state();
  },

  radius() {
    return faker.random.number();
  }
});
