import ENV from '../config/environment';

export default function() {
  this.urlPrefix = `${ENV.APP.API}`;
  this.namespace = '/v1';

  this.get('/users', () => {
    return {
        "data": {
          "id": "5a15da06096b9300013f43a3",
          "type": "User",
          "attributes": {
              "_id": "5a15da06096b9300013f43a3",
              "city": "Chicago",
              "state": "IL",
              "radius": 829,
              "profileId": "5a15da06096b9300013f43a4",
              "__v": 0
          },
        },
        "relationships": {
            "profile": {
                "data": {
                    "id": "5a15da06096b9300013f43a4",
                    "type": "Profile",
                },
            }
        },
       "included": [
         {
         "type": "Profile",
         "id": "5a15da06096b9300013f43a4",
         "attributes": {
             "_id": "5a15da06096b9300013f43a4",
             "isNull": true,
             "__v": 0
           },
         },

         {
         "type": "Skill",
         "id": "3123213",
         "attributes": {
             "_id": "3123213",
             "name": "Baking",
          },
         "relationships": {
            "profile": {
                "data" : {
                "type": "profile",
                "id": "5a15da06096b9300013f43a4",
               },
            },
          },
         },
       ]
      }
});

  // this.post('/users', (schema,req) => {
  //   console.log(req);
  // });

  this.passthrough('http://165.227.76.52:5000/**');
}
