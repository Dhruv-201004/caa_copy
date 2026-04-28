import mongoose, { Schema, models, model } from "mongoose";

const CertificateSchema = new Schema(
  {
    title: { type: String, required: true },
    issuer: { type: String },
    issuedYear: { type: String },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true }
);

export type CertificateDocument = mongoose.InferSchemaType<typeof CertificateSchema>;

export default models.Certificate || model("Certificate", CertificateSchema);
