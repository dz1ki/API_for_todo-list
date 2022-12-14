import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  notes: [{ type: Schema.Types.ObjectId, ref: "notes" }],
});
export default mongoose.model("users", UserSchema);
