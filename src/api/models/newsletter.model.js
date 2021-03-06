import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const postSchema = new Schema({
  author: {
    type: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
  },
  // not sure how to best store this here. Maybe as a buffer?
  content: String,
  list: {
    type: Schema.Types.ObjectId,
    ref: 'lists',
  },
  links: [{
    title: String,
    link: String,
    description: String,
    post: {
      type: Schema.Types.ObjectId,
      ref: 'posts',
    },
  }],
});

postSchema.methods = {};

postSchema.plugin(timestamps);

export default mongoose.model('posts', postSchema);
