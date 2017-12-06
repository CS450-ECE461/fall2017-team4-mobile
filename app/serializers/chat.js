import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serialize(snapshot) {
    let json = {
      "data": {
        "attributes": {
          "userId": snapshot.belongsTo('user').id,
          "employeeId": snapshot.belongsTo('employee').id
        }
      }
    }
    return json;
  }
});
