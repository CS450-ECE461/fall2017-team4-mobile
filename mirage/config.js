import ENV from '../config/environment';

export default function() {
  this.urlPrefix = `${ENV.APP.API}`;
  this.namespace = '/v1';

  this.get('/users', (schema) => {
    return schema.users.all();
  });

  // this.post('/users', (schema,req) => {
  //   console.log(req);
  // });

  this.passthrough('http://165.227.76.52:5000/**');
}
