import test from 'ava';

import Email from '../../../src/api/models/email.model';
import generateFakeEmail from '../../utils/generate/generateEmailData';

// Make sure we clean up after each test
test.afterEach(async () => await Email.remove({}).exec());

test('emails:create:valid', async t => {
  const email = new Email(generateFakeEmail());
  await email.save();
  const emails = await Email.find();
  t.ok(emails);
  t.ok(email._id);
  t.is(emails.length, 1);
});

test('emails:create:invalid', async t => {
  const email = new Email(generateFakeEmail({
    invalid: true,
  }));
  t.throws(email.save(), 'emails validation failed');
  const emails = await Email.findOne({ _id: email._id }).exec();
  t.notOk(emails);
});

// Assert we've cleaned up before finally exiting
test.after(async t => {
  const emails = await Email.find().exec();
  t.notOk(emails.length);
});
