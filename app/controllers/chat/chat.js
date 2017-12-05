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
      this.get('store').findRecord('user', this.get('gatekeeper.currentUser.id'))
        .then(user_ => {
          this.get('store').findRecord('employee', 1).then(employee_ => {
            this.get('store').createRecord('conversation',{
                  user: user_,
                  employee: employee_
              }).save()
          })
        })
    }
  }
});
