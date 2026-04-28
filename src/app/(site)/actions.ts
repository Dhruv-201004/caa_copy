"use server";

import { revalidatePath } from "next/cache";
import { dbConnect } from "@/lib/db";
import Contact from "@/lib/models/Contact";
import Career from "@/lib/models/Career";

type ActionState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function createContact(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      return { status: "error", message: "Please fill in all required fields." };
    }

    await dbConnect();
    await Contact.create({ name, email, phone, subject, message });
    revalidatePath("/admin/contacts");

    return {
      status: "success",
      message: "Thank you. We will reach out shortly.",
    };
  } catch (error) {
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
}

export async function applyCareer(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const careerId = String(formData.get("careerId") || "").trim();
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const resumeUrl = String(formData.get("resumeUrl") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!careerId || !name || !email) {
      return { status: "error", message: "Please fill in all required fields." };
    }

    await dbConnect();

    await Career.findByIdAndUpdate(careerId, {
      $push: {
        applications: { name, email, phone, resumeUrl, message },
      },
    });

    revalidatePath("/admin/careers");

    return {
      status: "success",
      message: "Application submitted. We will get back to you.",
    };
  } catch (error) {
    return {
      status: "error",
      message: "Unable to submit. Please try again.",
    };
  }
}
