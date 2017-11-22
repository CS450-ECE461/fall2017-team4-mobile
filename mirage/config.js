export default function() {
  this.namespace = '/api';




  this.get('users', () => {

    return {
          data: [
          {
              attributes: {
                email: 'test@test.com',
                name: 'John',
              },
            id: 1,
            type: 'user',
          },

          ],
          included: [
            {
              id: 1,
              type: 'profile',
              attributes: {
                  about : 'Hello',
                  birthdate: 'Test birth date',
              },
            },
            {
              id: 1,
              type: 'education',
              attributes: {
                icon: 'test',
                name: 'IUPUI',
                title: 'Iupui',
                location: 'indiana',
                start: '22',
                end: '45',
                description: 'iupui',
              },


            },
            {
              id: 2,
              type: 'education',
              attributes: {
                icon: 'test',
                name: 'IUPUI',
                title: 'Iupui',
                location: 'indiana',
                start: '22',
                end: '45',
                description: 'iupui',
              },
            },
            ]
            }
  });

  this.get('/articles', () => {
    return {
        "data": [{
          "type": "articles",
          "id": "1",
          "attributes": {
            "title": "JSON API paints my bikeshed!"
          },
          "links": {
            "self": "http://example.com/articles/1"
          },
          "relationships": {
            "author": {
              "links": {
                "self": "http://example.com/articles/1/relationships/author",
                "related": "http://example.com/articles/1/author"
              },
              "data": { "type": "people", "id": "9" }
            },
            "comments": {
              "links": {
                "self": "http://example.com/articles/1/relationships/comments",
                "related": "http://example.com/articles/1/comments"
              },
              "data": [
                { "type": "comments", "id": "5" },
                { "type": "comments", "id": "12" }
              ]
            }
          }
        }],
        "included": [{
          "type": "people",
          "id": "9",
          "attributes": {
            "first-name": "Dan",
            "last-name": "Gebhardt",
            "twitter": "dgeb"
          },
          "links": {
            "self": "http://example.com/people/9"
          }
        }, {
          "type": "comments",
          "id": "5",
          "attributes": {
            "body": "First!"
          },
          "relationships": {
            "author": {
              "data": { "type": "people", "id": "2" }
            }
          },
          "links": {
            "self": "http://example.com/comments/5"
          }
        }, {
          "type": "comments",
          "id": "12",
          "attributes": {
            "body": "I like XML better"
          },
          "relationships": {
            "author": {
              "data": { "type": "people", "id": "9" }
            }
          },
          "links": {
            "self": "http://example.com/comments/12"
          }
        }]
    }
  });




}
