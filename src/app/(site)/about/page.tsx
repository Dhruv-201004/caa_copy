import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";

export const dynamic = "force-dynamic";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="section-space">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="About Us"
              title="A chartered accountant firm built on trust and clarity"
              description="Ajit Agarwal & Associates combines disciplined compliance with forward-looking advisory. Our approach blends precision, confidentiality, and long-term partnership for every client."
            />
            <p className="text-sm text-slate-600">
              From direct and indirect taxation to audits and corporate finance,
              we deliver a premium client experience rooted in transparency and
              predictable outcomes.
            </p>
          </Reveal>

          <Reveal className="glass-panel rounded-3xl p-6">
            <div className="flex flex-col gap-4">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-navy-900 text-lg font-semibold text-ivory">
                AA
              </div>
              <div>
                <div className="text-lg font-semibold text-navy-900">
                  Ajit Agarwal
                </div>
                <div className="text-sm text-slate-500">
                  Founder & Managing Partner
                </div>
              </div>
              <p className="text-sm text-slate-600">
                Ajit Agarwal leads with a commitment to structured financial
                governance, reliable compliance, and proactive advisory that
                safeguards both growth and reputation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-white/70">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-3">
          {[
            {
              title: "Vision",
              description:
                "To be the most trusted financial advisory partner for businesses and families across North India.",
            },
            {
              title: "Mission",
              description:
                "Deliver reliable compliance, audit excellence, and proactive tax strategy with premium client care.",
            },
            {
              title: "Values",
              description:
                "Integrity, confidentiality, precision, and long-term partnerships that support sustainable success.",
            },
          ].map((item) => (
            <Reveal
              key={item.title}
              className="glass-panel flex flex-col gap-4 rounded-3xl p-6"
            >
              <div className="text-lg font-semibold text-navy-900">
                {item.title}
              </div>
              <p className="text-sm text-slate-600">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-space">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Premium advisory with dependable delivery"
            description="Every engagement is partner-led with transparent timelines, precise reporting, and strategic insights tailored to your business goals."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Partner-led audits and compliance assurance.",
              "Custom reporting and advisory dashboards.",
              "Prompt response with expert-led financial clarity.",
              "Proactive tax planning and risk mitigation.",
            ].map((item) => (
              <Reveal
                key={item}
                className="rounded-3xl border border-white/60 bg-white/70 p-6 text-sm text-slate-600"
              >
                {item}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
