const pactum = require('pactum');


//file name:    xx.test.js

// Using Mocha
// Running simple api test expectations.



it('should be a teapot', async () => {
  await pactum.spec()
    .get('http://httpbin.org/status/418')
    .expectStatus(418);
});

it('should save a new user', async () => {
  await pactum.spec()
    .post('https://jsonplaceholder.typicode.com/users')
    .withHeaders('Authorization', 'Basic xxxx')
    .withJson({
      name: 'bolt',
      email: 'bolt@swift.run'
    })
    .expectStatus(200);
});