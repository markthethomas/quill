// @flow
import test from 'ava';
import Post from '../../../src/server/models/post.model';
import generatePostData from '../../utils/generate/generatePostData';

test.afterEach(async () => await Post.remove({}).exec());

test('posts:create:valid', async t => {
  const post = new Post(generatePostData());
  await post.save();
  const posts = await Post.find();
  t.ok(post);
  t.ok(post._id);
  t.is(posts.length, 1);
});
