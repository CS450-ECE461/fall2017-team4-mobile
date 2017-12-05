import ENV from '../config/environment';
import { faker} from 'ember-cli-mirage';

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

  this.get('/employees/:id', (schema, request) => {
    return schema.employees.find(request.params.id);
  });

  this.get('/messages/:id', (schema, request) => {
    return schema.messages.find(request.params.id);
  });

  this.get('/chats', {
      data: [
        {
          type:"chat",
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
          type:"chat",
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

  this.get('/users/:id', (schema,req) => {
    return schema.users.find("1");
  });

  this.get('/jobs', {
      data: [
        {
          type: "job",
          id: "1",
          attributes: {
            title: "Software Developer",
            location: "Indianapolis, IN"
          },
          relationships: {
            company: {
              data: {type: "company", id: "1"}
            }
          }
        },
        {
          type: "job",
          id: "2",
          attributes: {
            title: "Java Guru",
            location: "San Fransisco, CA"
          },
          relationships: {
            company: {
              data: {type: "company", id: "2"}
            }
          }
        }
      ],
      included: [
        {
          type: "company",
          id: "1",
          attributes: {
            name: "Salesforce",
            logo: faker.image.business()
          }
        },
        {
          type: "company",
          id: "2",
          attributes: {
            name: "Genesys",
            logo: faker.image.business()
          }
        }
      ]
  });

  this.passthrough('http://165.227.76.52:5000/**');
}
