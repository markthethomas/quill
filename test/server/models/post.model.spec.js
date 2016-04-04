// @flow
import test from 'ava';
import markdownIt from 'markdown-it';
import Post from '../../../src/api/models/post.model';
import generatePostData from '../../utils/generate/generatePostData';

const markdown = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

test('posts:create:valid', async t => {
  const post = new Post(generatePostData());
  const savedPost = await post.save();
  t.ok(savedPost);
  t.ok(savedPost._id);
  t.ok(savedPost.content);
});

test('posts:model#formatted', async t => {
  const post = new Post(generatePostData());
  const savedPost = await post.save();
  t.ok(savedPost.formatted, 'should have a formatted method defined');
  t.is((typeof savedPost.formatted()), 'string', 'should return a string');
  t.same(savedPost.formatted(),
        markdown.render(savedPost.content.raw),
        'should properly render content to HTML');
});

test('posts:model#raw', async t => {
  const post = new Post(generatePostData());
  const savedPost = await post.save();
  t.ok(savedPost.raw, 'should have a raw method defined');
  t.is((typeof savedPost.raw()), 'string', 'should return a string');
  t.same(savedPost.raw(),
        savedPost.content.raw,
        'should properly raw markdown content');
});

test.after(async () => await Post.remove({}).exec());
