import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  query(store, type, query) {
    let url = `${this.get('host')}/${this.get('namespace')}/jobs/${query.id}/employees`;
    return this.ajax(url, 'GET');
  }
});
