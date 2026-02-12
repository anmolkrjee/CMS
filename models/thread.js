import mongoose from "mongoose";

const threadSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      }
    ],

    lastMessage: {
      type: String,
      default: ""
    },

    lastMessageAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Thread", threadSchema);
