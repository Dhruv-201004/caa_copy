import mongoose, { Schema, models, model } from "mongoose";

const ServiceSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

export type ServiceDocument = mongoose.InferSchemaType<typeof ServiceSchema>;

export default models.Service || model("Service", ServiceSchema);
