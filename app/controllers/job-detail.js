import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    startConversation(employee_) {
      console.log(employee_)
        this.get('store').findRecord('user', this.get('gatekeeper.currentUser.id'))
          .then(user_ => {
              this.get('store').createRecord('chat',{
                  user: user_,
                  employee: employee_
              }).save().then(conversation => {
                this.transitionToRoute('conversation', conversation)
              })
          })
       }
  }
});
