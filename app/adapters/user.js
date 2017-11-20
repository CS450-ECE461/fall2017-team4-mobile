import ApplicationAdapter from './application';


export default ApplicationAdapter.extend({

  /**
   * The backend is expecting to have the user id in the URL, which ember does
   * not automatically do. This method adds the id to the URL
   */
  buildURL(modelName, id, snapshot, requestType) {
    if (requestType === 'createRecord') {
        return `${this.get('host')}/${this.get('namespace')}/users/${id}`;
    }
    return this._super(...arguments);
  }
});
