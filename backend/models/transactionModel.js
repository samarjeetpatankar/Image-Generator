import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  plan: { type: String, required: true },
  credits: { type: Number, required: true },
  amount: { type: Number, required: true },
  payment: { type: Boolean, default: false },
  date: { type: Number },
});

const transactionModel =
  mongoose.models.Transaction ||
  mongoose.model("transaction", transactionSchema);

export default transactionModel;
