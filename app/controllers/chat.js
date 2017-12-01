import Controller from '@ember/controller';
import Ember from "ember";

export default Controller.extend({
  appController: Ember.inject.controller('application'),
  chatController: Ember.inject.controller('chat.chat'),
  jobsController: Ember.inject.controller('chat.jobs'),
  companyController: Ember.inject.controller('chat.companies'),
  requestController: Ember.inject.controller('chat.requests')
});
