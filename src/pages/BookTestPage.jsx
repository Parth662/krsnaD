import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHero from '../components/ui/PageHero';
import BookingForm from '../components/ui/BookingForm';
import Container from '../components/ui/Container';
import { PhoneCall, ShieldCheck, Clock, MapPin, CheckCircle2 } from 'lucide-react';

export default function BookTestPage() {
  const [searchParams] = useSearchParams();
  const preSelectedTest = searchParams.get('test') || '';

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] font-sans antialiased selection:bg-[#0F766E]/10 selection:text-[#0F766E]">
      <Navbar />

      <main>
        {/* Page Hero */}
        <PageHero
          eyebrow="02 — APPOINTMENT BOOKING"
          title="Schedule Diagnostic Test"
          highlight="Home Visit or Centre Slot"
          description="Book blood tests, pathology packages, MRI, CT scans, or home sample collection in under 60 seconds. Certified phlebotomists & NABL accredited labs."
          stats={[
            { value: '15 Min', label: 'Confirmation TAT' },
            { value: '06:30 AM', label: 'Earliest Slot' },
            { value: '100%', label: 'Cold-Chain Transport' },
            { value: '150+', label: 'Cities Covered' },
          ]}
        />

        {/* Booking Form & Care Info Layout */}
        <section className="py-16 sm:py-20 bg-[#FAFAF8] border-b border-[#E8E4DF]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column — Stateful Booking Form (~7 cols) */}
              <div className="lg:col-span-7">
                <BookingForm defaultTest={preSelectedTest} />
              </div>

              {/* Right Column — Patient Helpline & Assurance Rail (~5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Support Card */}
                <div className="bg-white border border-[#E8E4DF] p-6 rounded-md shadow-xs space-y-4">
                  <div className="flex items-center gap-3 text-[#0F766E]">
                    <PhoneCall className="w-5 h-5 stroke-[1.75]" />
                    <span className="font-serif-heading font-bold text-lg text-[#1A1A1A]">
                      Need Urgent Booking Support?
                    </span>
                  </div>

                  <p className="text-xs text-[#6B6B6B] leading-relaxed font-sans">
                    Our patient care coordinators are available 24 hours a day to assist with STAT emergency bookings, prescription uploads, and special preparation instructions.
                  </p>

                  <div className="p-3 bg-[#F0FDFA] border border-[#CCFBF1] rounded-xs font-mono-meta text-xs text-[#0F766E] space-y-1">
                    <div className="font-bold text-sm">📞 1800-212-0000 (Toll Free)</div>
                    <div className="text-[11px] text-[#6B6B6B]">Available 24/7 across India</div>
                  </div>
                </div>

                {/* Patient Safety Checklist */}
                <div className="bg-white border border-[#E8E4DF] p-6 rounded-md shadow-xs space-y-4">
                  <span className="font-mono-meta text-xs text-[#0F766E] uppercase font-semibold block">
                    KRSNAA PATIENT ASSURANCE
                  </span>

                  <div className="space-y-3 font-sans text-xs text-[#1A1A1A]">
                    {[
                      'Vacuum Sealed Single-Use Sterile Needle Kits',
                      'On-Site Barcode Labeling in Patient Presence',
                      'Temperature-Monitored Cold Storage Transport',
                      'Digitally Verified Report Delivered on WhatsApp',
                      'Zero Hidden Fees — Pay After Sample Collection',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5 stroke-[1.75]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub-Link to Home Collection Info */}
                <div className="p-4 bg-[#F5F3F0] border border-[#E8E4DF] rounded-md text-xs font-sans space-y-2">
                  <span className="font-semibold text-[#1A1A1A] block">
                    Want to learn more about home collection?
                  </span>
                  <p className="text-[#6B6B6B]">
                    Read our complete step-by-step home sample collection safety and preparation protocol.
                  </p>
                  <Link
                    to="/home-collection"
                    className="text-[#0F766E] font-medium hover:underline inline-block pt-1"
                  >
                    View Home Collection Guide →
                  </Link>
                </div>

              </div>

            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
