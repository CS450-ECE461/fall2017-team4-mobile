export default function() {
  this.namespace = '/api';


  this.get('/users', (schema) => {
    return schema.users.all();
  });


  this.get('/profiles', (schema) => {
    return {
            data: {
              id: 1,
              type: 'profile',
              attributes: {
                  skills: ['Communication","Leadership'],
                  about: 'test about',
                  education: ['test education'],
                  birthdate: 'Test birth date',
                  isNull: false,
               }
            }
          }
  });




}
