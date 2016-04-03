// @flow
import faker from 'faker';

export default function generatePostData(): Object {
  return {
    content: faker.lorem.paragraphs(),
  };
}
