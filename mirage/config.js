import ENV from '../config/environment';

export default function() {
  this.urlPrefix = `${ENV.APP.API}`;
  this.namespace = '/v1';

  this.get('/users', (schema) => {
    return schema.users.all();
  });

  this.get('/cities', (schema) => {
    return schema.cities.all();
  });

  this.get('/states', (schema) => {
    return schema.states.all();
  });

  this.get('/messages?userId=1&employeeId=1', (schema) => {
    return schema.states.all();
  });

  // this.post('/users', (schema,req) => {
  //   console.log(req);
  // });

  this.passthrough('http://165.227.76.52:5000/**');
}
