const request = require('supertest')
const app = require('../src/index')

/* testing all endpoints */

describe('GET /telegram/setwebhook', () => {
  it('respond with a json containing a list of all users', done => {
    request(app)
      .get('/telegram/setwebhook')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
  it('respond with a json containing a list of all users', done => {
    request(app)
      .get('/telegram/setwebhook')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done)
  });
})
