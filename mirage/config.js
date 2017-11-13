import Ember from 'ember';

export default function() {
  this.namespace = '/v1';

  this.get('/users', (schema) => {
    return schema.users.all();
  });

  this.post('/oauth2/token', (schema) => {
    return {"cool": "dude"};
  });

  this.get('/accounts', (schema, req) => {
    Ember.Logger.log(req);
    return {"user": "Freddy"};
  })
}
