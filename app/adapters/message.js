import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForCreateRecord(modelName, snapshot) {
    console.log(snapshot)
    return `${this.get('host')}/${this.get('namespace')}/chats/${snapshot.attr('conversationId')}`;
  }
});
