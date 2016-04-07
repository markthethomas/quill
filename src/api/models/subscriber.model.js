import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const subscriberSchema = new Schema({
  firstName: String,
  lastName: String,
  list: {
    type: Schema.Types.ObjectId,
    ref: 'lists',
  },
  email: {
    unique: true,
    type: String,
  },
});

subscriberSchema.methods = {};

subscriberSchema.plugin(timestamps);

export default mongoose.model('subscribers', subscriberSchema);
