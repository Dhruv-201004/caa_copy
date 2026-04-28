import SectionHeading from "@/components/site/SectionHeading";
import CareerApplyForm from "@/components/site/CareerApplyForm";
import { defaultCareers } from "@/lib/defaults";
import { getCareers } from "@/lib/queries";

export const dynamic = "force-dynamic";

type CareerItem = {
  _id?: string;
  title: string;
  location: string;
  type: string;
  experience?: string;
  description: string;
};

export default async function CareersPage() {
  const careers = await getCareers();
  const jobs: CareerItem[] = careers.length > 0 ? careers : defaultCareers;

  return (
    <div className="section-space">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeading
          eyebrow="Careers"
          title="Join a firm that values precision"
          description="Grow your career with a team that prioritizes mentorship, excellence, and disciplined financial advisory."
        />

        <div className="grid gap-6">
          {jobs.map((job, index) => (
            <div
              key={job._id ?? job.title}
              className="glass-panel rounded-3xl p-6"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-lg font-semibold text-navy-900">
                    {job.title}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-gold">
                    {job.location} | {job.type}
                  </div>
                </div>
                {job.experience ? (
                  <div className="text-sm text-slate-600">
                    Experience: {job.experience}
                  </div>
                ) : null}
              </div>
              <p className="mt-4 text-sm text-slate-600">{job.description}</p>

              {job._id ? (
                <details className="mt-6 rounded-2xl border border-white/60 bg-white/70 p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-navy-900">
                    Apply for this role
                  </summary>
                  <div className="mt-4">
                    <CareerApplyForm careerId={job._id} />
                  </div>
                </details>
              ) : (
                <div className="mt-4 text-xs text-slate-500">
                  Applications open after the role is published by admin.
                </div>
              )}
            </div>
          ))}
          {jobs.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-10 text-center text-sm text-slate-500">
              Job openings will be updated soon.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
