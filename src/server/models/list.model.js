import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const listSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  subscribers: [{
    type: Schema.Types.ObjectId,
    ref: 'subscribers',
  }],
});

listSchema.methods = {};

listSchema.plugin(timestamps);

export default mongoose.model('lists', listSchema);
