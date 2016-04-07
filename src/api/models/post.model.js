import mongoose, { Schema } from 'mongoose';
import markdownIt from 'markdown-it';
import timestamps from 'mongoose-timestamp';

const markdown = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

const postSchema = new Schema({
  author: {
    type: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
  },
  // not sure how to best store this here. Maybe as a buffer?
  content: {
    formatted: String,
    raw: String,
  },
  tags: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'tags',
    }],
  },
});

postSchema.methods.formatted = function formatted() {
  return markdown.render(this.content.raw);
};

postSchema.methods.raw = function raw() {
  return this.content.raw;
};

postSchema.plugin(timestamps);

export default mongoose.model('posts', postSchema);
