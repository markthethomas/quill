import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
import timestamps from 'mongoose-timestamp';

const emailSchema = new Schema({
  title: String,
  schedule: {
    send: Date,
    sent: Date,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: email => validator.isEmail(email),
      message: '{VALUE} is not a valid email.',
    },
  },
  meta: {
    error: Object,
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

emailSchema.methods = {};

emailSchema.plugin(timestamps);

export default mongoose.model('emails', emailSchema);
