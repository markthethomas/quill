import { generateApi } from '../utils/generateApi';
import test from 'ava';

const api = generateApi();

test('status:404', async t => {
  const res = await api.get(`/${Math.random()}`);
  t.is(res.status, 404);
});
