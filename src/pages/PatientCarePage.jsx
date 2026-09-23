import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHero from '../components/ui/PageHero';
import AiReceptionistSection from '../components/sections/AiReceptionistSection';
import WhatsAppSection from '../components/sections/WhatsAppSection';
import Container from '../components/ui/Container';
import { PhoneCall, ShieldCheck, Clock, MessageSquare, HelpCircle, Mail } from 'lucide-react';

export default function PatientCarePage() {
  const faqs = [
    {
      q: 'How will I receive my diagnostic report?',
      a: 'Reports are automatically delivered via WhatsApp link, SMS, and accessible anytime through the Krsnaa Patient Portal using your registered phone number.'
    },
    {
      q: 'Is fasting mandatory for all blood tests?',
      a: 'Fasting is required for specific panels like Fasting Blood Sugar, Lipid Profile, and Comprehensive Health Packages. Clear instructions are provided during booking.'
    },
    {
      q: 'How do I verify the authenticity of my lab report?',
      a: 'Every Krsnaa lab report includes a tamper-proof QR code. Scanning the QR code with any smartphone camera opens the verified digital record signed by certified NABL pathologists.'
    },
    {
      q: 'What are the home collection charges?',
      a: 'Home sample collection is complimentary for diagnostic packages above ₹499. For individual tests, a nominal doorstep charge of ₹50–₹100 applies depending on location.'
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] font-sans antialiased selection:bg-[#0F766E]/10 selection:text-[#0F766E]">
      <Navbar />

      <main>
        <PageHero
          eyebrow="04 — PATIENT CARE HUB"
          title="Compassionate Patient Support"
          highlight="24/7 AI Assistance & Instant Guidance"
          description="We are here to support your health journey with round-the-clock telephone support, instant WhatsApp report delivery, and interactive AI test guidance."
          stats={[
            { value: '24/7', label: 'Toll-Free Helpline' },
            { value: 'Instant', label: 'WhatsApp Reports' },
            { value: 'Sub-15m', label: 'Phlebotomist Assignment' },
            { value: '100%', label: 'Encrypted Privacy' },
          ]}
        />

        <AiReceptionistSection />
        <WhatsAppSection />

        {/* Support Helplines & FAQs Section */}
        <section className="py-20 sm:py-24 bg-[#FAFAF8] border-b border-[#E8E4DF]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Helplines Box */}
              <div className="lg:col-span-5 space-y-6">
                <span className="font-mono-meta text-xs font-semibold text-[#0F766E] uppercase tracking-wider block">
                  PATIENT DIRECTORY
                </span>
                <h2 className="font-serif-heading text-3xl sm:text-4xl font-semibold text-[#1A1A1A]">
                  Reach Our Support Desk
                </h2>
                
                <div className="bg-white border border-[#E8E4DF] p-6 rounded-md shadow-xs space-y-4">
                  <div className="flex items-start gap-4 pb-4 border-b border-[#E8E4DF]">
                    <div className="p-3 bg-[#F0FDFA] border border-[#CCFBF1] rounded-md text-[#0F766E]">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono-meta text-[#6B6B6B] block">TOLL FREE HELPLINE</span>
                      <a href="tel:18002120000" className="font-bold text-lg text-[#1A1A1A] hover:text-[#0F766E]">
                        1800-212-0000
                      </a>
                      <p className="text-xs text-[#6B6B6B]">Available 24 hours a day, 7 days a week</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pb-4 border-b border-[#E8E4DF]">
                    <div className="p-3 bg-[#F0FDFA] border border-[#CCFBF1] rounded-md text-[#0F766E]">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono-meta text-[#6B6B6B] block">WHATSAPP HELP DESK</span>
                      <a href="https://wa.me/9118002120000" target="_blank" rel="noreferrer" className="font-bold text-lg text-[#1A1A1A] hover:text-[#0F766E]">
                        +91 1800 212 0000
                      </a>
                      <p className="text-xs text-[#6B6B6B]">Instant report queries & slot bookings</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#F0FDFA] border border-[#CCFBF1] rounded-md text-[#0F766E]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono-meta text-[#6B6B6B] block">EMAIL SUPPORT</span>
                      <a href="mailto:support@krsnaadiagnostics.com" className="font-bold text-base text-[#1A1A1A] hover:text-[#0F766E]">
                        support@krsnaadiagnostics.com
                      </a>
                      <p className="text-xs text-[#6B6B6B]">Guaranteed response within 4 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs List */}
              <div className="lg:col-span-7 space-y-6">
                <span className="font-mono-meta text-xs font-semibold text-[#0F766E] uppercase tracking-wider block">
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <h2 className="font-serif-heading text-3xl sm:text-4xl font-semibold text-[#1A1A1A]">
                  Common Patient Enquiries
                </h2>

                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white border border-[#E8E4DF] p-6 rounded-md shadow-xs space-y-2">
                      <div className="flex items-center gap-2 font-serif-heading font-bold text-lg text-[#1A1A1A]">
                        <HelpCircle className="w-4 h-4 text-[#0F766E] shrink-0" />
                        <h3>{faq.q}</h3>
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-[#6B6B6B] leading-relaxed pl-6">
                        {faq.a}
                      </p>
                    </div>
                  ))}
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
