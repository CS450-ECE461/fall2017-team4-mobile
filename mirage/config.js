
export default function() {
  this.namespace = '/v1';

  this.get('/users', (schema) => {
    return schema.users.all();
  });

  // this.post('/users', (schema,req) => {
  //   console.log(req);
  // });

  this.passthrough('http://165.227.76.52:5000/**');
}
