const app = require('../../src/server/server.js');
const supertest = require('supertest-as-promised');

export function generateApi() {
  return supertest(app);
}
