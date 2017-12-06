import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  query(store, type, query) {
    if (query.userId !== undefined) {
      let url = `${this.get('host')}/${this.get('namespace')}/users/${query.userId}/chats`;
      return this.ajax(url, 'GET');
    } else {
      let url = `${this.get('host')}/${this.get('namespace')}/chats/${query.id}`;
      return this.ajax(url, 'GET');
    }
  }
});
