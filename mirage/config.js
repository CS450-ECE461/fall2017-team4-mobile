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

  this.get('/searches', (schema) => {
    return schema.searches.all();
  });

  this.get('/employees/:id', (schema, request) => {
    return schema.employees.find(request.params.id);
  })

  this.get('/messages/:id', (schema, request) => {
    return schema.messages.find(request.params.id);
  })

  this.get('/conversations', {
      data: [
        {
          type:"conversation",
          id: "1",
          relationships: {
            messages: {
              data: [
                {type: "message", id: "1"},
                {type: "message", id: "2"}
              ]
            },
            employee: {
              data: {type: "employee", id:"1"}
            },
            user: {
              data: {type: "user", id:"1"}
            }
          }
        },
        {
          type:"conversation",
          id: "2",
          relationships: {
            messages: {
              data: [
                {type: "message", id: "3"},
                {type: "message", id: "4"}
              ]
            },
            employee: {
              data: {type: "employee", id:"2"}
            },
            user: {
              data: {type: "user", id:"1"}
            }
          }
        }
      ]
    }
  );

  // this.post('/users', (schema,req) => {
  //   console.log(req);
  // });

  this.passthrough('http://165.227.76.52:5000/**');
}
