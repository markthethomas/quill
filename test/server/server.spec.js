import { generateApi } from '../utils/generateApi';
import test from 'ava';

const api = generateApi();

test('/health', async t => {
  const res = await api.get('/health');
  t.is(res.body.healthy, true);
});
