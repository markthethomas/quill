const app = require('../../src/server/server.js');
const supertest = require('supertest-as-promised');
const api = supertest(app);
const test = require('ava');

test('/health', async t => {
  const res = await api.get('/health');
  t.is(res.body.healthy , true);
});
