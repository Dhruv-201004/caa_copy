import SectionHeading from "@/components/site/SectionHeading";
import { getCertificates, getGallery } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const gallery = await getGallery();
  const certificates = await getCertificates();

  return (
    <div className="section-space">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments of excellence"
          description="A glimpse into our professional milestones, client events, and certifications."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(gallery.length ? gallery : []).map((item) => (
            <div key={item._id} className="glass-panel rounded-3xl p-4">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-48 w-full rounded-2xl object-cover"
              />
              <div className="mt-3 text-sm font-semibold text-navy-900">
                {item.title}
              </div>
            </div>
          ))}
          {gallery.length === 0 ? (
            <div className="col-span-full rounded-3xl border border-dashed border-slate-300 bg-white/70 p-10 text-center text-sm text-slate-500">
              Gallery items will appear here once uploaded by the admin.
            </div>
          ) : null}
        </div>

        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Certificates"
            title="Recognitions and credentials"
            description="Professional certifications and licenses that reinforce our compliance expertise."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(certificates.length ? certificates : []).map((item) => (
              <div key={item._id} className="glass-panel rounded-3xl p-4">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-48 w-full rounded-2xl object-cover"
                />
                <div className="mt-3 text-sm font-semibold text-navy-900">
                  {item.title}
                </div>
                {item.issuer ? (
                  <div className="text-xs text-slate-500">{item.issuer}</div>
                ) : null}
              </div>
            ))}
            {certificates.length === 0 ? (
              <div className="col-span-full rounded-3xl border border-dashed border-slate-300 bg-white/70 p-10 text-center text-sm text-slate-500">
                Certificates will appear here once uploaded by the admin.
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
