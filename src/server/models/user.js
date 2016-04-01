import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  username: {
    unique: true,
    type: String,
  },
  email: {
    unique: true,
    type: String,
  },
});

userSchema.methods = {};

userSchema.plugin(timestamps);

export default mongoose.model('users', userSchema);
