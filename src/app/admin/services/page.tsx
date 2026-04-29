import {
  createService,
  deleteService,
  updateService,
  requireAdmin,
} from "@/app/admin/actions";
import { dbConnect } from "@/lib/db";
import Service from "@/lib/models/Service";

export const dynamic = "force-dynamic";

export default async function AdminServicesPage() {
  await requireAdmin();
  await dbConnect();
  const services = await Service.find().sort({ createdAt: -1 }).lean();

  return (
    <div className="grid gap-8">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <div className="text-sm font-semibold text-navy-900">Services</div>
        <p className="mt-2 text-sm text-slate-600">
          Add, edit, or remove service offerings.
        </p>
      </div>

      <form action={createService} className="grid gap-4 rounded-3xl bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-navy-900">Title</label>
            <input name="title" required className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-navy-900">Category</label>
            <input name="category" required className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-navy-900">Description</label>
          <textarea name="description" rows={3} required className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-navy-900">Image URL (optional)</label>
          <input name="imageUrl" className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />
        </div>
        <button type="submit" className="w-fit rounded-full bg-navy-900 px-5 py-2 text-xs font-semibold text-ivory">
          Add Service
        </button>
      </form>

      <div className="grid gap-6">
        {services.map((service) => (
          <div key={service._id.toString()} className="rounded-3xl bg-white p-6 shadow-sm">
            <form action={updateService} className="grid gap-4">
              <input type="hidden" name="id" value={service._id.toString()} />
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-navy-900">Title</label>
                  <input name="title" defaultValue={service.title} className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-navy-900">Category</label>
                  <input name="category" defaultValue={service.category} className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-navy-900">Description</label>
                <textarea name="description" rows={3} defaultValue={service.description} className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-navy-900">Image URL</label>
                <input name="imageUrl" defaultValue={service.imageUrl} className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />
              </div>
              <button type="submit" className="w-fit rounded-full bg-navy-900 px-5 py-2 text-xs font-semibold text-ivory">
                Save Changes
              </button>
            </form>
            <form action={deleteService} className="mt-4">
              <input type="hidden" name="id" value={service._id.toString()} />
              <button type="submit" className="rounded-full border border-red-200 px-4 py-2 text-xs font-semibold text-red-600">
                Delete Service
              </button>
            </form>
          </div>
        ))}
        {services.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
            No services added yet.
          </div>
        ) : null}
      </div>
    </div>
  );
}
