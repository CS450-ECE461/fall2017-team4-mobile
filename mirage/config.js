export default function() {
  this.namespace = '/api';

  this.get('/users', (schema) => {
    return schema.users.all();
  });
}
