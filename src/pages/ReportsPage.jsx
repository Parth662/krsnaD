import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHero from '../components/ui/PageHero';
import ReportDemoSection from '../components/sections/ReportDemoSection';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Search, Download, FileText, CheckCircle2, ShieldCheck, Lock, PhoneCall } from 'lucide-react';

export default function ReportsPage() {
  const [patientMobile, setPatientMobile] = useState('');
  const [bookingId, setBookingId] = useState('');
  const [statusMessage, setStatusMessage] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!patientMobile && !bookingId) {
      setStatusMessage({ type: 'error', text: 'Please enter your Mobile Number or Sample Booking ID.' });
      return;
    }
    setStatusMessage({
      type: 'success',
      text: 'Report found! Verified PDF sample available below or click "Download Digital PDF".'
    });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] font-sans antialiased selection:bg-[#0F766E]/10 selection:text-[#0F766E]">
      <Navbar />

      <main>
        <PageHero
          eyebrow="08 — PATIENT PORTAL"
          title="Patient Reports Portal"
          highlight="Instant Download & Verified Tamper-Proof PDF"
          description="Access your NABL-accredited laboratory reports and 3D imaging signoffs securely. Enter your mobile number or booking ID below."
          stats={[
            { value: '256-Bit', label: 'Encrypted Access' },
            { value: 'QR Verified', label: 'Tamper-Proof Seal' },
            { value: 'WhatsApp', label: 'Direct Delivery' },
            { value: '24/7', label: 'Portal Availability' },
          ]}
        />

        {/* Report Search Portal Box */}
        <section className="py-16 sm:py-20 bg-white border-b border-[#E8E4DF]">
          <Container>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="text-center space-y-2">
                <span className="font-mono-meta text-xs font-semibold text-[#0F766E] uppercase tracking-wider">
                  SECURE REPORT ACCESS
                </span>
                <h2 className="font-serif-heading text-3xl sm:text-4xl font-semibold text-[#1A1A1A]">
                  Retrieve Diagnostic Report
                </h2>
                <p className="text-xs sm:text-sm text-[#6B6B6B] font-sans">
                  Enter the registered 10-digit mobile number used during sample collection or your Krsnaa Booking ID.
                </p>
              </div>

              <form onSubmit={handleSearch} className="bg-[#FAFAF8] border border-[#E8E4DF] p-6 sm:p-8 rounded-md shadow-xs space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-sans text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider block">
                      Registered Mobile Number *
                    </label>
                    <input
                      type="tel"
                      value={patientMobile}
                      onChange={(e) => setPatientMobile(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-white border border-[#E8E4DF] px-4 py-2.5 text-sm rounded-md focus:outline-none focus:border-[#0F766E]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-sans text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider block">
                      Booking ID / Lab No. (Optional)
                    </label>
                    <input
                      type="text"
                      value={bookingId}
                      onChange={(e) => setBookingId(e.target.value)}
                      placeholder="e.g. KRN-2026-88421"
                      className="w-full bg-white border border-[#E8E4DF] px-4 py-2.5 text-sm rounded-md focus:outline-none focus:border-[#0F766E]"
                    />
                  </div>
                </div>

                {statusMessage && (
                  <div
                    className={`p-4 rounded-md text-xs font-sans ${
                      statusMessage.type === 'error'
                        ? 'bg-rose-50 text-rose-800 border border-rose-200'
                        : 'bg-[#F0FDFA] text-[#0F766E] border border-[#CCFBF1] flex items-center gap-2'
                    }`}
                  >
                    {statusMessage.type === 'success' && <CheckCircle2 className="w-4 h-4 shrink-0" />}
                    <span>{statusMessage.text}</span>
                  </div>
                )}

                <Button type="submit" variant="primary" size="lg" icon={Search} className="w-full justify-center">
                  SEARCH FOR REPORTS
                </Button>

                <div className="flex items-center justify-center gap-6 text-[11px] font-mono-meta text-[#6B6B6B] pt-2 border-t border-[#E8E4DF]">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-[#0F766E]" /> HIPAA/ISO 27001 Secure
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0F766E]" /> NABL QR Verified
                  </span>
                </div>
              </form>
            </div>
          </Container>
        </section>

        {/* Report Interactive Demo Section */}
        <ReportDemoSection />
      </main>

      <Footer />
    </div>
  );
}
