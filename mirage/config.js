import ENV from '../config/environment';

let realEnpoints = ['jobs'];

export default function() {
  this.post("/gatekeeper/v1/oauth2/token", { "token_type": "Bearer" });

  this.get("/gatekeeper/v1/accounts/me", { "account": { "_id": "id1" } });

  this.namespace = '/v1';
  this.urlPrefix = `${ENV.APP.API}`;

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

  // this.get('/chats/:id', {
  //   data: [
  //     {
  //       type: "message",
  //       id: "4",
  //       attributes: {
  //         body: "Hey! I'm interested in this job!!!",
  //         fromId: "5a277651ae959a0001f576e2",
  //         timestamp: "2017-12-06T06:56:54.542Z"
  //       }
  //     },
  //     {
  //       type: "message",
  //       id: "1",
  //       attributes: {
  //         body: "OK!!! What exactly do you want to know",
  //         fromId: "1",
  //         timestamp: "2017-12-06T06:56:54.542Z"
  //       }
  //     },
  //     {
  //       type: "message",
  //       id: "2",
  //       attributes: {
  //         body: "I would like to know why it only pays $200,000. This seems very unreasonable. Am I wrong? AM I wrong? AM I WRONG?!?!",
  //         fromId: "5a277651ae959a0001f576e2",
  //         timestamp: "2017-12-06T06:56:54.542Z"
  //       }
  //     },
  //     {
  //       type: "message",
  //       id: "3",
  //       attributes: {
  //         body: "!!!",
  //         fromId: "5a277651ae959a0001f576e2",
  //         timestamp: "2017-12-06T06:56:54.542Z"
  //       }
  //     },
  //     {
  //       type: "message",
  //       id: "5",
  //       attributes: {
  //         body: "Good bye mean sir",
  //         fromId: "1",
  //         timestamp: "2017-12-06T06:56:54.542Z"
  //       }
  //     }
  //   ]
  // })

  this.get('jobs', {
      data: [
        {
          type: "job",
          id: "1",
          attributes: {
            title: "Graphics Designer",
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
            title: "Web Designer",
            location: "Indianapolis, IN"
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
            logo: "https://s3-us-west-1.amazonaws.com/waldojobs-dev/app-assets/images/source/salesforce.jpg"
          }
        },
        {
          type: "company",
          id: "2",
          attributes: {
            name: "Genesys",
            logo: "https://s3-us-west-1.amazonaws.com/waldojobs-dev/app-assets/images/source/genesys.png"
          }
        }
      ]
  });

  this.get('/jobs/:id', {
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
  })

  this.get('/jobs/:id/employees', {
    data: [{
      id: "124",
      type: "employee",
      attributes: {
        name: "John Smith"
      }
    }]
  })

  if (ENV.environment !== "test") {
    this.passthrough('http://165.227.76.52:5000/**', ...realEnpoints);
  }
}
