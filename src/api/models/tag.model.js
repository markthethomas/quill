import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const tagSchema = new Schema({
  name: String,
  post: {
    type: Schema.Types.ObjectId,
    ref: 'posts',
  },
});

tagSchema.methods = {};

tagSchema.plugin(timestamps);

export default mongoose.model('tags', tagSchema);
