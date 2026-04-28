import SectionHeading from "@/components/site/SectionHeading";
import Calculators from "@/components/knowledge/Calculators";
import { actsAndRules, importantLinks, utilities } from "@/lib/site-data";

export const dynamic = "force-dynamic";

export default function KnowledgeBankPage() {
  return (
    <div className="section-space">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeading
          eyebrow="Knowledge Bank"
          title="Resources, calculators, and compliance tools"
          description="Access practical calculators, quick utilities, and trusted regulatory resources curated for business owners and finance teams."
        />

        <div className="flex flex-col gap-6">
          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Calculators
          </div>
          <Calculators />
          <p className="text-xs text-slate-500">
            Calculations are indicative estimates and may vary based on the
            latest regulations. Please consult our advisors for precision.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="glass-panel rounded-3xl p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Utilities
            </div>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              {utilities.map((item) => (
                <li key={item} className="rounded-xl border border-white/60 p-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel rounded-3xl p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Important Links
            </div>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              {importantLinks.map((link) => (
                <li key={link.href} className="rounded-xl border border-white/60 p-3">
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel rounded-3xl p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Acts & Rules
            </div>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              {actsAndRules.map((item) => (
                <li key={item} className="rounded-xl border border-white/60 p-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
