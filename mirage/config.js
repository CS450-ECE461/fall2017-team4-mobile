import ENV from '../config/environment';

export default function() {
  this.urlPrefix = `${ENV.APP.API}`;
  this.namespace = '/v1';

  this.get('/users/5a15da06096b9300013f43a3', () => {
    return {
      "data": {
        "id": "5a15da06096b9300013f43a3",
        "type": "user",
        "attributes": {
          "city": "Chicago",
          "state": "IL",
          "radius": 829
        },
        "relationships": {
          "profile": {
            "data": { "id": "5a15da06096b9300013f43a4", "type": "Profile" }
          }
        }
      },
      "included": [
      {
        "type": "profile",
        "id": "5a15da06096b9300013f43a4",
        "attributes": {
          "isNull": true,
          "about": "I am a developer",
          "birthdate": "10/10/2010"
        },
        "relationships": {
          "skills": {
            "data" : [
              { "type": "skill", "id": "3123213" },
              { "type": "skill", "id": "1234" }
            ]
          },
          "occupations": {
            "data" : [
              { "type": "occupation", "id": "4321" }
            ]
          },
          "education": {
            "data" : [
              { "type": "education", "id": "2222" },
              { "type": "education", "id": "1111" }
            ]
          },
          "experience": {
            "data" : [
              { "type": "experience", "id": "4444" },
              { "type": "experience", "id": "5555" }
            ]
          }
        }
      },
      {
        "type": "skill",
        "id": "3123213",
        "attributes": {
          "name": "Baking"
        }
      },
      {
        "type": "skill",
        "id": "1234",
        "attributes": {
          "name": "Flipping Pancakes"
        }
      },
      {
        "type": "occupation",
        "id": "4321",
        "attributes": {
          "name": "DB Admin"
        }
      },
      {
        "type": "education",
        "id": "1111",
        "attributes": {
          "name": "IUPUI",
          "title": "BS Computer Science",
          "location": "Indianapolis, IN"
        }
      },
      {
        "type": "education",
        "id": "2222",
        "attributes": {
          "name": "Colombia University",
          "title": "BS Electrical Engineering",
          "location": "Colombia"
        }
      },
      {
        "type": "experience",
        "id": "4444",
        "attributes": {
          "name": "Rolls-Royce",
          "title": "Super Duper Technical Advisor",
          "location": "San Fransisco, CA"
        }
      },
      {
        "type": "experience",
        "id": "5555",
        "attributes": {
          "name": "Cummins",
          "title": "Senior Welder",
          "location": "Charleston, SC"
        }
      }
    ]
  }
});

  this.get('/cities', (schema) => {
    return schema.cities.all();
  });

  this.get('/states', (schema) => {
    return schema.states.all();
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
