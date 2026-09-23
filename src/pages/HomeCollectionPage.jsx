import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHero from '../components/ui/PageHero';
import HomeCollectionSection from '../components/sections/HomeCollectionSection';
import BookingForm from '../components/ui/BookingForm';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Thermometer, ShieldCheck, Clock, CheckCircle2, FileText, PhoneCall } from 'lucide-react';

export default function HomeCollectionPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] font-sans antialiased selection:bg-[#0F766E]/10 selection:text-[#0F766E]">
      <Navbar />

      <main>
        {/* Hero */}
        <PageHero
          eyebrow="02 — HOME SAMPLE COLLECTION"
          title="Doorstep Sample Collection"
          highlight="Cold-Chain Monitored & NABL Certified"
          description="Schedule home sample collection in 60 seconds. Our certified phlebotomists arrive with sealed sterile kits and maintain strict 2°C–8°C cold-chain transport."
          stats={[
            { value: '30 Min', label: 'Slot Precision' },
            { value: '2°C–8°C', label: 'Controlled Temp' },
            { value: '100%', label: 'Single-Use Sterile' },
            { value: '150+', label: 'Cities Covered' },
          ]}
        />

        {/* Detailed Home Collection Section */}
        <HomeCollectionSection />

        {/* Booking Form Grid Section */}
        <section className="py-16 sm:py-20 bg-white border-b border-[#E8E4DF]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="font-mono-meta text-xs font-semibold text-[#0F766E] uppercase tracking-wider">
                    FAST BOOKING
                  </span>
                  <h2 className="font-serif-heading text-3xl sm:text-4xl font-semibold text-[#1A1A1A]">
                    Book Your Home Collection Slot Now
                  </h2>
                </div>
                <BookingForm defaultTest="Preventive Full Body Health Profile" />
              </div>

              <div className="lg:col-span-5 space-y-6 lg:pt-12">
                <div className="bg-[#FAFAF8] border border-[#E8E4DF] p-6 rounded-md space-y-4">
                  <h3 className="font-serif-heading font-bold text-xl text-[#1A1A1A]">
                    Sample Prep Guidelines
                  </h3>
                  
                  <div className="space-y-3 font-sans text-xs text-[#6B6B6B] leading-relaxed">
                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#1A1A1A] block">Fasting Requirement:</strong>
                        For lipid and glucose profiles, 10–12 hours overnight fasting is required (water is permitted).
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Thermometer className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#1A1A1A] block">Sterile Collection:</strong>
                        All vacutainers are unsealed in front of you. Barcode tags are affixed before specimen storage.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#1A1A1A] block">Digital Verification:</strong>
                        Receive SMS tracking code and WhatsApp link for realtime sample status.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[#F0FDFA] border border-[#CCFBF1] rounded-md space-y-3">
                  <div className="flex items-center gap-2 text-[#0F766E] font-semibold text-sm">
                    <PhoneCall className="w-4 h-4" />
                    <span>Need Phone Assistance?</span>
                  </div>
                  <p className="text-xs text-[#6B6B6B]">
                    Speak with our patient support desk to schedule custom timings or multi-member family bookings.
                  </p>
                  <div className="font-bold text-base text-[#0F766E]">
                    1800-212-0000 (Toll Free)
                  </div>
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
