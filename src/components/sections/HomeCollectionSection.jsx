import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Thermometer, Clock } from 'lucide-react';

export default function HomeCollectionSection() {
  const steps = [
    { num: '01', title: 'Schedule Slot', desc: 'Choose a 30-minute morning slot at your home or office.' },
    { num: '02', title: 'Phlebotomist Visit', desc: 'Certified phlebotomist arrives with sterile single-use vacutainer kit.' },
    { num: '03', title: 'Cold-Chain Transport', desc: 'Sample sealed & transported under 2°C–8°C temperature control.' },
    { num: '04', title: 'Digital Report', desc: 'Verified PDF report delivered to mobile phone & Patient Portal.' },
  ];

  return (
    <section id="collect" className="py-14 sm:py-20 lg:py-24 bg-[#FAFAF8] border-b border-[#E8E4DF]">
      <Container>
        
        {/* Eyebrow */}
        <span className="font-mono-meta text-xs font-semibold text-[#0F766E] uppercase tracking-[0.15em] block mb-3">
          02 — HOME COLLECTION
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column — Editorial Text (~6 cols) */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-semibold text-[#1A1A1A] tracking-tight leading-[1.12]">
              Diagnostics, from the comfort of your home.
            </h2>

            <p className="text-[#6B6B6B] text-sm sm:text-lg font-sans leading-relaxed">
              Skip the waiting room. Krsnaa certified phlebotomists collect your blood samples directly at your doorstep using temperature-controlled bio-specimen kits and source barcoding.
            </p>

            {/* Clinical Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white border border-[#E8E4DF] p-4 rounded-md shadow-xs space-y-1">
                <div className="flex items-center gap-2 text-[#0F766E] font-sans font-semibold text-sm">
                  <Thermometer className="w-4 h-4 stroke-[1.75]" />
                  <span>Cold-Chain Telemetry</span>
                </div>
                <p className="text-xs text-[#6B6B6B] font-sans">
                  Specimens maintained strictly at 2°C–8°C until laboratory analysis.
                </p>
              </div>

              <div className="bg-white border border-[#E8E4DF] p-4 rounded-md shadow-xs space-y-1">
                <div className="flex items-center gap-2 text-[#0F766E] font-sans font-semibold text-sm">
                  <Clock className="w-4 h-4 stroke-[1.75]" />
                  <span>15-Min Confirmation</span>
                </div>
                <p className="text-xs text-[#6B6B6B] font-sans">
                  Instant technician assignment & SMS confirmation slot.
                </p>
              </div>
            </div>

            {/* CTA Trigger */}
            <div className="pt-2">
              <Link to="/book" className="block sm:inline-block">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto justify-center"
                >
                  BOOK HOME COLLECTION
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column — Editorial Image (~6 cols) */}
          <div className="lg:col-span-6 w-full max-w-full">
            <div className="relative border border-[#E8E4DF] bg-white p-2.5 sm:p-3 rounded-md shadow-xs space-y-3">
              <img
                src="/light_home_collection.jpg"
                alt="Clean home sample collection kit neatly arranged on table"
                className="w-full h-[240px] sm:h-[400px] object-cover rounded-sm"
              />

              <div className="p-3 bg-[#F5F3F0] border-t border-[#E8E4DF] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-[#6B6B6B] rounded-xs">
                <div>
                  <span className="font-semibold text-[#1A1A1A] block">NABL Trained Technicians</span>
                  <span>Sterile single-use vacutainers</span>
                </div>
                <div>
                  <span className="font-semibold text-[#1A1A1A] block">Encrypted Source Barcode</span>
                  <span>Zero manual mix-up risk</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Step Process Horizontal Rail */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-[#E8E4DF]">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white border border-[#E8E4DF] p-5 rounded-md shadow-xs space-y-2">
              <span className="font-mono-meta text-xs font-bold text-[#0F766E]">{step.num}</span>
              <h3 className="font-serif-heading font-bold text-base text-[#1A1A1A]">{step.title}</h3>
              <p className="font-sans text-xs text-[#6B6B6B] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
