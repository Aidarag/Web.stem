'use client';

import Image from 'next/image';
import { Sun, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function SummerSTEMSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#F7F5FC] to-white py-16 md:py-24 border-b border-gray-200/80 text-gray-900 overflow-hidden">
      {/* Background ambient decorative glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-purple-200/30 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-pink-200/20 blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 z-0 grid-pattern opacity-25 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <ScrollReveal className="relative bg-white border border-gray-200/90 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-pink-50/30 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 border border-purple-200/80 px-4 py-1.5 text-xs font-bold text-purple-800 shadow-sm">
                <Sun className="h-4 w-4 text-purple-600 fill-purple-600/30" />
                <span className="font-mono uppercase tracking-wider text-[11px]">Youth Pipeline</span>
              </div>

              {/* Headline & Required text */}
              <div className="space-y-3">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 uppercase leading-tight">
                  STEM Starts <span className="text-purple-600">Early.</span>
                </h2>
                <p className="font-sans text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                  Explore our Summer STEM Program for middle and high school students.
                </p>
              </div>

              {/* Bullet highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  'Hands-on lab experiments & molecular assays',
                  'Robotics, coding, and game design tracks',
                  'Livingstone faculty & college peer mentors',
                  'Field trips, career talks, and project showcase',
                ].map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href="https://stem-program-delta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group btn-gradient-lime inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm sm:text-base font-extrabold tracking-wide shadow-xl hover:shadow-2xl transition-all cursor-pointer"
                  aria-label="Explore Summer STEM →"
                >
                  Explore Summer STEM <ArrowRight className="h-5 w-5 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right Photo Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="group relative aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 bg-gray-100">
                <Image
                  src="/images/summer-stem/summer-stem-camp.jpg"
                  alt="Livingstone College Summer STEM Program middle and high school students in lab coats"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating caption badge on the image */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl p-3 text-white shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-sans text-xs font-bold flex items-center gap-1.5 text-white">
                        <Sparkles className="h-3.5 w-3.5 text-[#e3fc51]" /> Summer Scholars Cohort
                      </p>
                      <p className="font-mono text-[10px] sm:text-[11px] text-gray-200 mt-0.5">
                        Middle & High School Hands-on Labs
                      </p>
                    </div>
                    <span className="rounded-full bg-purple-600/90 text-[#e3fc51] font-mono text-[10px] font-extrabold px-2.5 py-1 uppercase border border-[#e3fc51]/40 shrink-0">
                      Summer 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
