import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHero from '../components/ui/PageHero';
import DigitalSystemSection from '../components/sections/DigitalSystemSection';
import Container from '../components/ui/Container';
import { ShieldCheck, Award, HeartHandshake, Cpu, Users, Building2 } from 'lucide-react';

export default function AboutPage() {
  const pillars = [
    {
      icon: Award,
      title: 'Uncompromising Quality & NABL Accreditation',
      desc: 'Our laboratories strictly adhere to ISO 15189 standards with regular proficiency testing and automated 6-Sigma quality control protocol.'
    },
    {
      icon: HeartHandshake,
      title: 'Accessible & Affordable Healthcare',
      desc: 'We partner with government bodies and medical institutions to deliver high-precision 3.0T MRI, CT, and Pathology at subsidized transparent rates.'
    },
    {
      icon: Cpu,
      title: 'Cutting-Edge Medical Infrastructure',
      desc: 'Equipped with Siemens, GE Healthcare, and Roche diagnostic analyzers, enabling ultra-precise sub-millimeter scans and rapid STAT pathology.'
    },
    {
      icon: Users,
      title: 'Expert Panel of Pathologists & Radiologists',
      desc: 'Over 200+ specialized MD Pathologists, Radiologists, and Bio-Statisticians verify every critical diagnosis before report dispatch.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] font-sans antialiased selection:bg-[#0F766E]/10 selection:text-[#0F766E]">
      <Navbar />

      <main>
        <PageHero
          eyebrow="05 — ABOUT KRSNAA DIAGNOSTICS"
          title="Democratizing Advanced Diagnostics"
          highlight="Precision Medical Insights for 140+ Million Patients"
          description="Founded with a mission to make world-class medical imaging and pathology accessible to every citizen across metros, Tier-2, and Tier-3 India."
          stats={[
            { value: '1,800+', label: 'Diagnostic Centers' },
            { value: '140M+', label: 'Patients Served' },
            { value: '200+', label: 'MD Radiologists & Pathologists' },
            { value: '150+', label: 'Cities Networked' },
          ]}
        />

        {/* Mission & Vision Section */}
        <section className="py-20 sm:py-24 bg-white border-b border-[#E8E4DF]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="font-mono-meta text-xs font-semibold text-[#0F766E] uppercase tracking-wider block">
                  OUR MISSION
                </span>
                <h2 className="font-serif-heading text-4xl sm:text-5xl font-semibold text-[#1A1A1A] leading-tight">
                  Clinical Authority, Engineering Speed & Accessibility.
                </h2>
                <p className="text-[#6B6B6B] text-base sm:text-lg font-sans leading-relaxed">
                  Krsnaa Diagnostics stands at the intersection of medical clinical excellence and modern digital telemetry. We operate one of Asia's largest tele-radiology networks, connecting remote rural hospitals with senior diagnostic specialists in real time.
                </p>
                
                <div className="p-4 bg-[#FAFAF8] border border-[#E8E4DF] rounded-md space-y-2">
                  <div className="flex items-center gap-2 font-serif-heading font-bold text-base text-[#1A1A1A]">
                    <Building2 className="w-5 h-5 text-[#0F766E]" />
                    <span>Public-Private Partnership Pioneer</span>
                  </div>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed">
                    Trusted partner to state governments, municipal corporations, and medical colleges for managing large-scale diagnostic hubs.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="border border-[#E8E4DF] bg-[#FAFAF8] p-3 rounded-md shadow-xs">
                  <img
                    src="/clinical_hero_lab.jpg"
                    alt="Krsnaa Diagnostics modern automated biochemistry lab"
                    className="w-full h-[380px] sm:h-[440px] object-cover rounded-sm"
                  />
                  <div className="p-3 text-xs font-sans text-[#6B6B6B] flex items-center justify-between border-t border-[#E8E4DF] mt-2">
                    <span className="font-medium text-[#1A1A1A]">Roche & Siemens High-Throughput Automation</span>
                    <span className="text-[#0F766E] font-semibold">ISO 15189 Certified</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-12 border-t border-[#E8E4DF]">
              {pillars.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="bg-[#FAFAF8] border border-[#E8E4DF] p-6 rounded-md shadow-xs space-y-3">
                    <div className="p-3 bg-[#F0FDFA] border border-[#CCFBF1] w-fit rounded-md text-[#0F766E]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif-heading font-bold text-lg text-[#1A1A1A]">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-[#6B6B6B] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Digital System Overview */}
        <DigitalSystemSection />
      </main>

      <Footer />
    </div>
  );
}
