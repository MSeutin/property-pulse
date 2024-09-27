import { Schema, model, models } from "mongoose"

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email is already registered'],
    required: [true, 'Email is required'],
  },
  userName: {
    type: String,
    unique: [true, 'Username is already taken'],
    required: [true, 'Username is required'],
  },
  image: {
    type: String,
  },
  bookmarks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Property',
    },
  ],
}, { timestamps: true });

const User = models.User || model('User', UserSchema);

export default User;