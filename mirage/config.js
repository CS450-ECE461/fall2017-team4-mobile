import ENV from '../config/environment';

export default function() {
  this.urlPrefix = `${ENV.APP.API}`;
  this.namespace = '/v1';

  this.get('/users', () => {
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
      "included": [{
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
      }]
    }
});

  // this.post('/users', (schema,req) => {
  //   console.log(req);
  // });

  this.passthrough('http://165.227.76.52:5000/**');
}
