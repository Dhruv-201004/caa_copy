import mongoose, { Schema, models, model } from "mongoose";

const GalleryItemSchema = new Schema(
  {
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true }
);

export type GalleryItemDocument = mongoose.InferSchemaType<typeof GalleryItemSchema>;

export default models.GalleryItem || model("GalleryItem", GalleryItemSchema);
