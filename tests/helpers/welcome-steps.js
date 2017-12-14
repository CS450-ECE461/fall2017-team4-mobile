import { registerAsyncHelper } from '@ember/test';

let login = registerAsyncHelper('login', function() {
  visit("/sign-in");
  andThen(() => {
    fillIn("[type=email]", "dogs@cats.com");
    fillIn("[type=password]", "test");
    click("[type=submit]");
  })
});

let logout = registerAsyncHelper('logout', function() {
  click(".settings-button");
});

export default {
  login,
  logout
};
