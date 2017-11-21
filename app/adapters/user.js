import ApplicationAdapter from './application';


export default ApplicationAdapter.extend({

  /**
   * The backend is expecting to have the user id in the URL when a user is created.
   * Ember does NOT automatically do this with its `createRecord` method, so this
   * method adds the id to the URL.
   */
  buildURL(modelName, id, snapshot, requestType) {
    if (requestType === 'createRecord') {
        return `${this.get('host')}/${this.get('namespace')}/users/${id}`;
    }
    return this._super(...arguments);
  }
});
