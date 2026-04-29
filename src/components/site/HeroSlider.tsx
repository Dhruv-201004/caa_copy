"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2000&auto=format&fit=crop",
    title: "Precision in Every Equation",
    subtitle: "Navigating Your Financial Future",
    desc: "Expert chartered accounting services combining strategic foresight with unparalleled attention to detail."
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    title: "Building Corporate Wealth",
    subtitle: "Trusted Tax & Audit Solutions",
    desc: "Comprehensive financial modeling and compliance strategies for modern enterprises."
  },
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
    title: "Strategic Financial Advice",
    subtitle: "Your Vision, Our Expertise",
    desc: "From startup bookkeeping to multi-national tax planning, we ensure your finances are optimized."
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-navy/60 z-10 mix-blend-multiply" />
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className={`object-cover transition-transform duration-[10000ms] ease-linear ${
              index === current ? "scale-110" : "scale-100"
            }`}
            priority={index === 0}
          />
          
          {/* Content overlay inside relative container */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div className={`container mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 delay-300 ${
              index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-widest text-gold uppercase border border-gold/30 rounded-full bg-navy/40 backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                {slide.subtitle}
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-light text-white mb-6 tracking-tight drop-shadow-xl">
                {slide.title}
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-200 font-light mb-10 drop-shadow-md">
                {slide.desc}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 pointer-events-auto">
                <Link
                  href="#services"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-gold border border-gold hover:bg-transparent overflow-hidden rounded-sm"
                >
                  <span className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full opacity-10"></span>
                  <span className="relative flex items-center">
                    Our Services
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-300 border border-white/30 bg-transparent hover:border-gold hover:text-gold rounded-sm backdrop-blur-sm"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === current ? "w-8 bg-gold" : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
