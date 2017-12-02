import Controller from '@ember/controller';
import Ember from "ember";

export default Controller.extend({
  searchBarText: "Search Saved Chat",
  searchValue: '',

  actions: {
    onSearchBarInput(value) {
      Ember.Logger.log(value)
    },

    onClickFilter() {
      Ember.Logger.log("I'm filtering!!")
    },

    onArrowClicked(conversation) {
      this.transitionToRoute('conversation', conversation)
    },

    startConversation() {
      let convo = this.get('store').createRecord('chat',
        {
            user: this.get('gatekeeper.currentUser.id'),
            employee: "employee2"
        });
        convo.save()
    }
  }
});
