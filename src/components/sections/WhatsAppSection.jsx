import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { MessageSquare, CheckCheck, FileText, ArrowRight } from 'lucide-react';

export default function WhatsAppSection({ onExploreClick }) {
  const messages = [
    {
      time: '08:15 AM',
      type: 'BOOKING CONFIRMATION',
      body: 'Your HbA1c & Lipid Profile home collection is confirmed for today at 08:30 AM. Assigned Phlebotomist: Vikram S. (ID: PHL-492).',
      status: 'CONFIRMED',
    },
    {
      time: '08:32 AM',
      type: 'COLLECTION REMINDER',
      body: 'Phlebotomist Vikram S. has arrived with barcoded cold-chain specimen kit #KD-8920.',
      status: 'ARRIVED',
    },
    {
      time: '10:45 AM',
      type: 'LABORATORY STATUS',
      body: 'Specimen #KD-8920 received at Pune Central Reference Lab. Automated analyzer run in progress.',
      status: 'PROCESSING',
    },
    {
      time: '01:15 PM',
      type: 'REPORT DELIVERED',
      body: 'Your NABL verified diagnostic report is now available. Click link below to download encrypted PDF.',
      linkText: 'download_report_KD8920.pdf (142 KB)',
      status: 'VERIFIED',
    },
  ];

  return (
    <section id="track" className="py-20 sm:py-24 bg-[#FAFAF8] border-b border-[#E8E4DF]">
      <Container>
        
        {/* Eyebrow */}
        <span className="font-mono-meta text-xs font-semibold text-[#0F766E] uppercase tracking-[0.15em] block mb-3">
          AUTOMATED UPDATES
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column — Text (~6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif-heading text-4xl sm:text-5xl font-semibold text-[#1A1A1A] tracking-tight leading-[1.12]">
              Real-time updates straight to your mobile phone.
            </h2>

            <p className="text-[#6B6B6B] text-base sm:text-lg font-sans leading-relaxed">
              Stay informed at every diagnostic milestone without dialing call centers. Krsnaa sends automated, encrypted notifications straight to your WhatsApp and SMS.
            </p>

            <div className="space-y-3 pt-2">
              {[
                { title: 'Booking Verification', desc: 'Instant appointment details & technician badge confirmation.' },
                { title: 'Phlebotomist ETA', desc: 'Real-time arrival alerts and temperature verification.' },
                { title: 'Lab Telemetry Status', desc: 'Automated updates when samples enter analyzer processing.' },
                { title: 'NABL Signed Report PDF', desc: 'Instant encrypted report download link sent directly to chat.' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 border-l-2 border-[#0F766E] pl-4 py-0.5">
                  <div>
                    <h3 className="font-sans font-bold text-sm text-[#1A1A1A]">{item.title}</h3>
                    <p className="font-sans text-xs text-[#6B6B6B]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={onExploreClick}
              >
                Learn About Patient Care
              </Button>
            </div>
          </div>

          {/* Right Column — Minimal Typographic Message Log (~6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-[#E8E4DF] rounded-md shadow-xs overflow-hidden">
              
              <div className="p-4 bg-[#F5F3F0] border-b border-[#E8E4DF] flex items-center justify-between text-xs font-sans text-[#6B6B6B]">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#0F766E] stroke-[1.75]" />
                  <span className="font-semibold text-[#1A1A1A]">Krsnaa Patient Updates</span>
                </div>
                <span className="text-[#0F766E] font-medium text-[11px] bg-[#F0FDFA] px-2 py-0.5 rounded-xs border border-[#CCFBF1]">
                  Official Channel
                </span>
              </div>

              <div className="p-5 space-y-3 font-sans text-xs sm:text-sm">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FAFAF8] border border-[#E8E4DF] p-4 rounded-md space-y-1.5"
                  >
                    <div className="flex items-center justify-between font-mono-meta text-[11px] text-[#6B6B6B] border-b border-[#E8E4DF] pb-1.5">
                      <span className="text-[#0F766E] font-semibold">{msg.type}</span>
                      <div className="flex items-center gap-1.5">
                        <span>{msg.time}</span>
                        <CheckCheck className="w-3.5 h-3.5 text-[#0F766E] stroke-[1.75]" />
                      </div>
                    </div>

                    <p className="text-[#1A1A1A] text-xs leading-relaxed">
                      {msg.body}
                    </p>

                    {msg.linkText && (
                      <div className="mt-2 p-2 bg-white border border-[#E8E4DF] rounded-xs flex items-center justify-between text-xs font-mono-meta text-[#0F766E]">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-[#0F766E] stroke-[1.75]" />
                          <span>{msg.linkText}</span>
                        </div>
                        <span className="font-sans font-medium text-xs text-[#0F766E]">Download PDF</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-3 bg-[#F5F3F0] border-t border-[#E8E4DF] text-center font-sans text-xs text-[#6B6B6B]">
                Encrypted Patient Data Telemetry Protocol
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

