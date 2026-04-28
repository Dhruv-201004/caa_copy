import mongoose, { Schema, models, model } from "mongoose";

const ApplicationSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    resumeUrl: { type: String },
    message: { type: String },
  },
  { timestamps: true }
);

const CareerSchema = new Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true },
    experience: { type: String },
    description: { type: String, required: true },
    applications: { type: [ApplicationSchema], default: [] },
  },
  { timestamps: true }
);

export type CareerDocument = mongoose.InferSchemaType<typeof CareerSchema>;

export default models.Career || model("Career", CareerSchema);
