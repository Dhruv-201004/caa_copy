import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/site/SectionHeading";
import { firmStats, serviceHighlights, testimonials } from "@/lib/site-data";
import HeroSlider from "@/components/site/HeroSlider";
import { FadeIn } from "@/components/site/FadeIn";
import { dbConnect } from "@/lib/db";
import TeamMember from "@/lib/models/TeamMember";

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
    src: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=800&auto=format&fit=crop",
    label: "Audit and assurance",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    label: "Strategic tax",
  },
  {
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    label: "Corporate finance",
  },
];

export const dynamic = "force-dynamic";

export default async function Home() {
  await dbConnect();
  const teamPreview = await TeamMember.find().sort({ createdAt: -1 }).limit(3).lean();

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Hero Section with Cinematic Slider */}
      <HeroSlider />

      {/* Stats Section overlapping slightly with Hero */}
      <section className="relative z-10 -mt-20 mx-auto max-w-6xl px-6 w-full">
        <FadeIn delay={0.2} direction="up">
          <div className="glass-panel flex flex-col md:flex-row items-center justify-between gap-8 rounded-3xl p-8 lg:p-12 shadow-2xl bg-white/80 backdrop-blur-xl border border-white/50">
            <div className="md:w-1/3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-2 block">
                Firm Snapshot
              </span>
              <h2 className="text-3xl font-serif text-navy">
                Built on trust.<br />Focused on clarity.
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full md:w-2/3">
              {firmStats.map((stat, i) => (
                <div key={stat.label} className="flex gap-2 flex-col items-start border-l border-navy/10 pl-6">
                  <span className="text-4xl font-light text-navy">{stat.value}</span>
                  <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Why Choose Us */}
      <section className="section-space mt-10">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 items-center">
          <FadeIn direction="right">
            <div className="relative h-[600px] w-full overflow-hidden rounded-[2rem] shadow-2xl group">
               <div className="absolute inset-0 bg-navy/20 z-10 group-hover:bg-transparent transition duration-700" />
               <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                alt="Corporate advisory session"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </FadeIn>
          
          <div className="flex flex-col gap-10">
            <FadeIn direction="up">
              <SectionHeading
                eyebrow="Why Choose Us"
                title="Premium advisory with disciplined delivery"
                description="A partner-led firm with a focus on accuracy, accountability, and long-term client outcomes. We pride ourselves on turning complex regulatory frameworks into clear, actionable business strategies."
              />
            </FadeIn>
            
            <div className="grid gap-6">
              {valueCards.map((card, i) => (
                <FadeIn key={card.title} direction="up" delay={i * 0.15}>
                  <div className="group relative overflow-hidden rounded-2xl border border-navy/5 bg-white p-6 md:p-8 transition-all hover:shadow-xl hover:border-gold/30">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gold transform -translate-x-full transition-transform group-hover:translate-x-0" />
                    <h3 className="text-xl font-serif text-navy mb-3 group-hover:text-gold transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-space bg-navy text-white relative py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="mx-auto max-w-7xl px-6 relative z-10 flex flex-col gap-16">
          <FadeIn direction="up">
            <div className="max-w-3xl">
              <span className="text-gold tracking-[0.2em] font-medium uppercase text-sm mb-4 block">Our Expertise</span>
                <h2 className="text-white text-4xl md:text-5xl font-serif font-light mb-6">End-to-End Chartered Accountant Services</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                From direct tax strategy to corporate finance, we deliver tailored financial solutions that align with your growth and compliance goals.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            {serviceHighlights.map((service, i) => (
              <FadeIn key={service.title} direction="up" delay={i * 0.1}>
                <div className="h-full flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-2 duration-500 group">
                  <div>
                    <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.1em] text-gold hover:text-white transition-colors w-fit"
                  >
                    Explore Service <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="up" delay={0.4}>
            <div className="grid gap-6 md:grid-cols-3 mt-8">
              {serviceGallery.map((item, i) => (
                <div
                  key={item.label}
                  className="relative h-64 overflow-hidden rounded-2xl group"
                >
                  <div className="absolute inset-0 bg-navy/40 z-10 group-hover:bg-navy/10 transition-colors duration-500" />
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <span className="text-white font-medium tracking-wide drop-shadow-md bg-navy/60 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-space">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
          <FadeIn direction="up">
            <SectionHeading
              eyebrow="Leadership"
              title="Dedicated experts guiding your outcomes"
              description="A multi-disciplinary team of chartered accountants, auditors, and advisors focused on premium client care."
            />
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamPreview.map((member, i) => (
              <FadeIn key={member.name} direction="up" delay={i * 0.1}>
                <div className="glass-panel flex flex-col gap-4 rounded-3xl p-6 hover:-translate-y-2 transition-transform duration-500 group">
                  <div className="relative h-64 overflow-hidden rounded-2xl">
                    <Image
                        src={member.imageUrl || "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      sizes="(min-width: 1024px) 300px, 90vw"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-serif text-navy">
                      {member.name}
                    </div>
                    <div className="text-xs uppercase tracking-[0.2em] text-gold mt-1">
                      {member.role}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-space bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
          <FadeIn direction="up">
            <SectionHeading
              eyebrow="Client Voices"
              title="Confidence earned through results"
              description="We partner with growing businesses and established enterprises to deliver dependable advisory and compliance outcomes."
            />
          </FadeIn>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <FadeIn key={testimonial.name} direction="up" delay={i * 0.1}>
                <div className="glass-panel relative flex flex-col gap-6 rounded-3xl p-8 border border-navy/5 shadow-lg bg-slate-50/50">
                  <div className="absolute top-8 right-8 text-4xl text-gold/20 font-serif">"</div>
                  <p className="text-slate-600 leading-relaxed italic relative z-10">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-auto pt-4 border-t border-navy/10 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy font-serif font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-slate-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-space mb-20">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn direction="up">
            <div className="rounded-[3rem] bg-gold p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-white/10 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
               <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl font-serif text-navy mb-6">
                  Ready to Elevate Your Financial Strategy?
                </h2>
                <p className="text-navy/80 text-lg md:text-xl max-w-2xl mb-10">
                  Schedule a confidential consultation with our partners to discuss your specific tax, audit, and advisory needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-navy transition-all duration-300 hover:bg-navy/90 rounded-none shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  Book a Consultation
                </Link>
               </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
