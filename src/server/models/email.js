import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const userSchema = new Schema({
  title: String,
  lastName: Date,
  schedule: {
    send: Date,
    sent: Date,
  },
  meta: {
    error: Error,
    sent: Boolean,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
  },
  list: {
    type: Schema.Types.ObjectId,
    ref: 'lists',
  },
});

userSchema.methods = {};

userSchema.plugin(timestamps);

export default mongoose.model('users', userSchema);
