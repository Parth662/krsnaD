import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { CalendarCheck2, Syringe, Cpu, FileCheck, Stethoscope, ArrowRight } from 'lucide-react';

export default function DiagnosticJourney() {
  const steps = [
    {
      num: '01',
      title: 'BOOK',
      subtitle: 'Schedule Appointment',
      desc: 'Select required pathology or radiology package online or via WhatsApp in 60 seconds.',
      icon: CalendarCheck2,
      link: '/book',
    },
    {
      num: '02',
      title: 'SAMPLE',
      subtitle: 'Sample Collection',
      desc: 'Painless home sample collection by certified phlebotomists with source barcoding.',
      icon: Syringe,
      link: '/home-collection',
    },
    {
      num: '03',
      title: 'TEST',
      subtitle: 'NABL Lab Analysis',
      desc: 'High-throughput automated processing in accredited reference laboratories.',
      icon: Cpu,
      link: null,
    },
    {
      num: '04',
      title: 'REPORT',
      subtitle: 'Digital Sign-Off',
      desc: 'Digitally signed NABL report delivered to mobile phone & Patient Portal.',
      icon: FileCheck,
      link: '/reports',
    },
    {
      num: '05',
      title: 'FOLLOW-UP',
      subtitle: 'Doctor Consultation',
      desc: 'Direct consultation routing and DICOM imaging access for consulting physicians.',
      icon: Stethoscope,
      link: null,
    },
  ];

  return (
    <section id="journey" className="py-14 sm:py-20 lg:py-24 bg-[#FAFAF8] border-b border-[#E8E4DF]">
      <Container>
        
        {/* Eyebrow */}
        <span className="font-mono-meta text-xs font-semibold text-[#0F766E] uppercase tracking-[0.15em] block mb-3">
          04 — PATIENT CARE
        </span>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 pb-6 sm:pb-8 border-b border-[#E8E4DF] gap-4">
          <div>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-semibold text-[#1A1A1A] tracking-tight">
              A Seamless, Patient-Focused Journey
            </h2>
          </div>

          <p className="text-[#6B6B6B] text-sm sm:text-base font-sans max-w-md">
            From initial booking to physician follow-up, every step is designed for clarity, speed, and clinical precision.
          </p>
        </div>

        {/* Horizontal Process Rail Desktop / Responsive Grid Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white border border-[#E8E4DF] p-5 sm:p-6 rounded-md shadow-xs space-y-4 hover:border-[#CBD5E1] transition-all relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-meta text-xs font-bold text-[#0F766E] bg-[#F0FDFA] px-2 py-0.5 border border-[#CCFBF1] rounded-xs">
                      STEP {step.num}
                    </span>
                    <Icon className="w-5 h-5 text-[#0F766E] stroke-[1.75]" />
                  </div>

                  <div>
                    <h3 className="font-serif-heading font-bold text-lg sm:text-xl text-[#1A1A1A]">
                      {step.title}
                    </h3>
                    <span className="font-sans text-xs font-semibold text-[#6B6B6B] block">
                      {step.subtitle}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-[#6B6B6B] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {step.link && (
                  <div className="pt-3 border-t border-[#E8E4DF]">
                    <Link
                      to={step.link}
                      className="text-xs font-sans font-medium text-[#0F766E] hover:text-[#0D9488] flex items-center gap-1 focus:outline-none min-h-[36px]"
                    >
                      <span>Action Request</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[1.75]" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
