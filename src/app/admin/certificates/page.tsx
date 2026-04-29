import {
  createCertificate,
  deleteCertificate,
  updateCertificate,
  requireAdmin,
} from "@/app/admin/actions";
import { dbConnect } from "@/lib/db";
import Certificate from "@/lib/models/Certificate";

export const dynamic = "force-dynamic";

export default async function AdminCertificatesPage() {
  await requireAdmin();
  await dbConnect();
  const certificates = await Certificate.find().sort({ createdAt: -1 }).lean();

  return (
    <div className="grid gap-8">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <div className="text-sm font-semibold text-navy-900">Certificates</div>
        <p className="mt-2 text-sm text-slate-600">
          Upload professional certifications and recognition images.
        </p>
      </div>

      <form
        action={createCertificate}
        encType="multipart/form-data"
        className="grid gap-4 rounded-3xl bg-white p-6 shadow-sm"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-navy-900">Title</label>
            <input name="title" required className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-navy-900">Issuer</label>
            <input name="issuer" className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-navy-900">Issued Year</label>
            <input name="issuedYear" className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-navy-900">Image URL (optional)</label>
            <input name="imageUrl" className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-navy-900">Upload Image</label>
          <input type="file" name="image" accept="image/*" />
        </div>
        <button type="submit" className="w-fit rounded-full bg-navy-900 px-5 py-2 text-xs font-semibold text-ivory">
          Add Certificate
        </button>
      </form>

      <div className="grid gap-6">
        {certificates.map((certificate) => (
          <div key={certificate._id.toString()} className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <img
                src={certificate.imageUrl}
                alt={certificate.title}
                className="h-28 w-36 rounded-2xl object-cover"
              />
              <form
                action={updateCertificate}
                encType="multipart/form-data"
                className="grid flex-1 gap-4"
              >
                <input type="hidden" name="id" value={certificate._id.toString()} />
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-navy-900">Title</label>
                    <input name="title" defaultValue={certificate.title} className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-navy-900">Issuer</label>
                    <input name="issuer" defaultValue={certificate.issuer} className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-navy-900">Issued Year</label>
                    <input name="issuedYear" defaultValue={certificate.issuedYear} className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-navy-900">Image URL</label>
                    <input name="imageUrl" defaultValue={certificate.imageUrl} className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-navy-900">Replace Image</label>
                  <input type="file" name="image" accept="image/*" />
                </div>
                <button type="submit" className="w-fit rounded-full bg-navy-900 px-5 py-2 text-xs font-semibold text-ivory">
                  Save Changes
                </button>
              </form>
            </div>
            <form action={deleteCertificate} className="mt-4">
              <input type="hidden" name="id" value={certificate._id.toString()} />
              <button type="submit" className="rounded-full border border-red-200 px-4 py-2 text-xs font-semibold text-red-600">
                Delete Certificate
              </button>
            </form>
          </div>
        ))}
        {certificates.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
            No certificates uploaded yet.
          </div>
        ) : null}
      </div>
    </div>
  );
}
