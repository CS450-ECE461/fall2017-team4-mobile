export default function() {
  this.namespace = '/api';

  this.get('/users', (schema, request) => {
    return schema.users.all();
  });
}
