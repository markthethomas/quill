// @flow
import faker from 'faker';

export default function generateFakeEmail(opts: Object = {}): Object {
  const email = opts.invalid ? faker.lorem.word() : faker.internet.email();
  return {
    email,
    title: faker.lorem.words(),
    schedule: {
      send: faker.date.future(),
      sent: faker.date.past(),
    },
    meta: {
      error: null,
      sent: null,
    },
  };
}
