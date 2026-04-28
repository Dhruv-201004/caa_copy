import SectionHeading from "@/components/site/SectionHeading";
import ContactForm from "@/components/site/ContactForm";

export const dynamic = "force-dynamic";

export default function ContactPage() {
  return (
    <div className="section-space">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Contact"
            title="Start a conversation with our advisors"
            description="Share your requirements, and we will respond with a clear, customized roadmap."
          />

          <div className="grid gap-4 text-sm text-slate-600">
            <div className="rounded-2xl border border-white/60 bg-white/70 p-4">
              Amar Complex, HC-49, Ram Ganga Vihar Phase 2, Moradabad, Uttar
              Pradesh 244001
            </div>
            <div className="rounded-2xl border border-white/60 bg-white/70 p-4">
              Phone: 098371 50633
            </div>
            <div className="rounded-2xl border border-white/60 bg-white/70 p-4">
              Email: info@aaca.in
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-6">
            <ContactForm />
          </div>
        </div>

        <div className="glass-panel rounded-3xl p-4">
          <div className="text-sm font-semibold text-navy-900">
            Office Location
          </div>
          <div className="mt-4 overflow-hidden rounded-2xl">
            <iframe
              title="Ajit Agarwal & Associates Map"
              src="https://www.google.com/maps?q=VQC4%2BG24%20Amar%20Complex%2C%20HC-49%2C%20Ram%20Ganga%20Vihar%20Phase%202%2C%20Moradabad%2C%20Uttar%20Pradesh%20244001&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl border-0"
            />
          </div>
          <div className="mt-4 text-xs text-slate-500">
            WhatsApp us directly for quick responses and priority scheduling.
          </div>
        </div>
      </div>
    </div>
  );
}
