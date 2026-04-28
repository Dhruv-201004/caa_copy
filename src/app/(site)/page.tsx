import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { firmStats, serviceHighlights, testimonials } from "@/lib/site-data";

const heroImages = [
  {
    src: "/images/hero-01.svg",
    alt: "Premium audit and assurance",
  },
  {
    src: "/images/hero-02.svg",
    alt: "Tax advisory leadership",
  },
  {
    src: "/images/hero-03.svg",
    alt: "Financial governance focus",
  },
];

const valueCards = [
  {
    title: "Partner-led oversight",
    description:
      "Every engagement is overseen by senior partners to ensure precision and trust.",
  },
  {
    title: "Clear reporting",
    description:
      "Structured audit and compliance dashboards keep stakeholders aligned.",
  },
  {
    title: "Proactive compliance",
    description:
      "We anticipate regulatory changes and mitigate risk before it impacts you.",
  },
];

const serviceGallery = [
  {
    src: "/images/service-01.svg",
    label: "Audit and assurance",
  },
  {
    src: "/images/service-02.svg",
    label: "Strategic tax",
  },
  {
    src: "/images/service-03.svg",
    label: "Corporate finance",
  },
];

const teamPreview = [
  {
    name: "Ajit Agarwal",
    role: "Managing Partner",
    image: "/images/team-01.svg",
  },
  {
    name: "Ritika Sharma",
    role: "Audit Lead",
    image: "/images/team-02.svg",
  },
  {
    name: "Karan Mehta",
    role: "Tax Manager",
    image: "/images/team-03.svg",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-gold-400/20 blur-3xl" />
          <div className="absolute bottom-0 left-[-10%] h-96 w-96 rounded-full bg-navy-700/10 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <Reveal className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gold-400/30 bg-white/70 px-4 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-gold">
              Trusted Advisory
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-navy-900 md:text-5xl">
              Your Trusted Partner for Tax, Audit & Financial Excellence
            </h1>
            <p className="max-w-xl text-base text-slate-600 md:text-lg">
              Ajit Agarwal & Associates delivers precise compliance, transparent
              reporting, and strategic advisory that strengthens confidence
              across every financial decision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-navy-900 px-6 py-3 text-xs font-semibold text-ivory card-shadow transition hover:bg-navy-800"
              >
                Book Consultation
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-navy-900/20 px-6 py-3 text-xs font-semibold text-navy-900 transition hover:border-navy-900/40"
              >
                Contact Us
              </Link>
            </div>
            <div className="mt-6 grid gap-4 text-sm text-slate-600 md:grid-cols-2">
              <div className="rounded-2xl border border-white/60 bg-white/70 p-4">
                Dedicated partner-led oversight for every engagement.
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/70 p-4">
                Fast response, structured reporting, and zero-surprise delivery.
              </div>
            </div>
          </Reveal>

          <Reveal className="flex flex-col gap-6">
            <div className="relative h-[420px] overflow-hidden rounded-[32px] border border-white/60 bg-white/60 p-4">
              <div className="absolute inset-0 shimmer-surface opacity-60" />
              <div className="relative grid h-full grid-cols-6 grid-rows-6 gap-4">
                <div className="col-span-4 row-span-4 rounded-3xl bg-white/80 p-3 hover-lift">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <Image
                      src={heroImages[0].src}
                      alt={heroImages[0].alt}
                      fill
                      className="object-cover"
                      priority
                      sizes="(min-width: 1024px) 380px, 70vw"
                    />
                  </div>
                </div>
                <div className="col-span-2 row-span-3 rounded-3xl bg-white/80 p-3 hover-lift float-slow">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <Image
                      src={heroImages[1].src}
                      alt={heroImages[1].alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 180px, 40vw"
                    />
                  </div>
                </div>
                <div className="col-span-2 row-span-3 rounded-3xl bg-white/80 p-3 hover-lift float-medium">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <Image
                      src={heroImages[2].src}
                      alt={heroImages[2].alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 180px, 40vw"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel flex flex-col gap-4 rounded-3xl p-6">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-gold">
                  Firm Snapshot
                </span>
                <h2 className="mt-3 text-2xl font-semibold text-navy-900">
                  Built on trust. Focused on clarity.
                </h2>
              </div>
              <div className="grid gap-4">
                {firmStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/80 px-4 py-3"
                  >
                    <span className="text-sm text-slate-600">{stat.label}</span>
                    <span className="text-lg font-semibold text-navy-900">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-navy-900 px-4 py-4 text-sm text-ivory">
                Confidential advisory with meticulous compliance discipline.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-white/70">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="relative">
            <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-4">
              <Image
                src="/images/why-01.svg"
                alt="Why choose Ajit Agarwal & Associates"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 80vw"
              />
            </div>
          </Reveal>
          <Reveal className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Premium advisory with disciplined delivery"
              description="A partner-led firm with a focus on accuracy, accountability, and long-term client outcomes."
            />
            <div className="grid gap-4">
              {valueCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-white/60 bg-white/70 p-5 text-sm text-slate-600 hover-lift"
                >
                  <div className="text-sm font-semibold text-navy-900">
                    {card.title}
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
          <SectionHeading
            eyebrow="Services"
            title="End-to-end chartered accountant services"
            description="From direct tax strategy to corporate finance, we deliver tailored financial solutions that align with your growth and compliance goals."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {serviceGallery.map((item) => (
              <div
                key={item.label}
                className="relative h-48 overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-3 hover-lift"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 320px, 90vw"
                />
              </div>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceHighlights.map((service) => (
              <Reveal
                key={service.title}
                className="glass-panel flex h-full flex-col gap-4 rounded-3xl p-6 hover-lift"
              >
                <div className="text-lg font-semibold text-navy-900">
                  {service.title}
                </div>
                <p className="text-sm text-slate-600">{service.description}</p>
                <Link
                  href="/services"
                  className="mt-auto text-xs font-semibold uppercase tracking-[0.2em] text-gold"
                >
                  Explore
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white/70">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Firm Insight"
              title="A strategic partner for modern enterprises"
              description="We blend disciplined governance with forward-looking insight, helping finance leaders stay compliant while accelerating growth."
            />
            <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-2">
              <div className="rounded-2xl border border-white/60 bg-white/70 p-4">
                Custom advisory roadmaps aligned to business stage.
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/70 p-4">
                Transparent, timeline-driven compliance reporting.
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/70 p-4">
                Dedicated leadership involvement across engagements.
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/70 p-4">
                Structured, scalable finance operations support.
              </div>
            </div>
          </Reveal>
          <Reveal className="relative">
            <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-4">
              <Image
                src="/images/about-01.svg"
                alt="Firm advisory overview"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 80vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
          <SectionHeading
            eyebrow="Leadership"
            title="Dedicated experts guiding your outcomes"
            description="A multi-disciplinary team of chartered accountants, auditors, and advisors focused on premium client care."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamPreview.map((member) => (
              <Reveal
                key={member.name}
                className="glass-panel flex flex-col gap-4 rounded-3xl p-6 hover-lift"
              >
                <div className="relative h-56 overflow-hidden rounded-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 300px, 90vw"
                  />
                </div>
                <div>
                  <div className="text-base font-semibold text-navy-900">
                    {member.name}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-gold">
                    {member.role}
                  </div>
                </div>
                <Link
                  href="/team"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-gold"
                >
                  View Profile
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
          <SectionHeading
            eyebrow="Client Voices"
            title="Confidence earned through results"
            description="We partner with growing businesses and established enterprises to deliver dependable advisory and compliance outcomes."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Reveal
                key={testimonial.name}
                className="glass-panel flex flex-col gap-4 rounded-3xl p-6"
              >
                <p className="text-sm text-slate-600">"{testimonial.quote}"</p>
                <div>
                  <div className="text-sm font-semibold text-navy-900">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-slate-500">{testimonial.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-navy-radial p-10 text-ivory">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold-500/20 blur-3xl" />
            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold">
                  Ready for confident compliance and growth?
                </h3>
                <p className="mt-2 text-sm text-ivory/80">
                  Speak with our advisors to build a clear, compliant, and
                  scalable financial foundation.
                </p>
              </div>
              <Link
                href="/contact"
                className="rounded-full bg-gold-500 px-6 py-3 text-xs font-semibold text-navy-900 transition hover:bg-gold-400"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
