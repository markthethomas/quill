// @flow
import markdownContent from '../../fixtures/post.js';

export default function generatePostData(opts = { valid: true }): Object {
  return {
    content: {
      raw: opts.valid && opts.valid ? markdownContent : Math.random(),
    },
  };
}
