import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  query(store, type, query) {
    let url = `${this.get('host')}/${this.get('namespace')}/chats/${query.id}`;
    return this.ajax(url, 'GET');
  }
});
