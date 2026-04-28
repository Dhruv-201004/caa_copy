import { dbConnect } from "@/lib/db";
import Service from "@/lib/models/Service";
import TeamMember from "@/lib/models/TeamMember";
import GalleryItem from "@/lib/models/GalleryItem";
import Certificate from "@/lib/models/Certificate";
import Career from "@/lib/models/Career";
import Contact from "@/lib/models/Contact";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  await dbConnect();

  const [
    services,
    team,
    gallery,
    certificates,
    careers,
    contacts,
  ] = await Promise.all([
    Service.countDocuments(),
    TeamMember.countDocuments(),
    GalleryItem.countDocuments(),
    Certificate.countDocuments(),
    Career.countDocuments(),
    Contact.countDocuments(),
  ]);

  const stats = [
    { label: "Services", value: services },
    { label: "Team Members", value: team },
    { label: "Gallery Items", value: gallery },
    { label: "Certificates", value: certificates },
    { label: "Career Openings", value: careers },
    { label: "Contact Queries", value: contacts },
  ];

  return (
    <div className="grid gap-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <div className="text-sm font-semibold text-navy-900">
          Admin Overview
        </div>
        <p className="mt-2 text-sm text-slate-600">
          Track key content areas and respond quickly to new leads.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">
              {stat.label}
            </div>
            <div className="mt-4 text-3xl font-semibold text-navy-900">
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
