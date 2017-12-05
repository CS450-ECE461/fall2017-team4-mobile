import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serialize(snapshot, options) {
    // console.log(.id())
    // console.log(.id())

    let json ={
    	"data" :{
    		"attributes": {
    			"userId": snapshot.belongsTo('user').id,
    			"employeeId": snapshot.belongsTo('employee').id
    		}
    	}
    }

    return json;

  }
});
