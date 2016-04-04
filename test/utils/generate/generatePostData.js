// @flow
import markdownContent from '../../fixtures/post.js';

export default function generatePostData(): Object {
  return {
    content: {
      raw: markdownContent,
    },
  };
}
