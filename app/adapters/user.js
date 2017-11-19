import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL(modelName, id, snapshot, requestType, query) {
    if (requestType === 'createRecord') {
        return `${this.get('host')}/${this.get('namespace')}/users/${id}`;
    }
    return this._super(...arguments);
  }
});
