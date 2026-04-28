import mongoose, { Schema, models, model } from "mongoose";

const ContactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    subject: { type: String },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export type ContactDocument = mongoose.InferSchemaType<typeof ContactSchema>;

export default models.Contact || model("Contact", ContactSchema);
