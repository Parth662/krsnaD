import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { UserCheck } from 'lucide-react';

export default function AiReceptionistSection() {
  const [selectedTopic, setSelectedTopic] = useState(0);

  const capabilities = [
    {
      id: 'APPOINTMENT',
      title: 'Appointment Requests',
      prompt: '"I need an MRI scan at Pune center this Thursday morning."',
      response: 'Slot availability checked. 3.0T MRI open at 09:30 AM & 11:00 AM at Pune Central Hub. Shall I reserve 09:30 AM?',
    },
    {
      id: 'TEST_INFO',
      title: 'Fasting & Test Preparation',
      prompt: '"Do I need to fast before taking the Lipid Profile & HbA1c test?"',
      response: '10–12 hours overnight fasting is required for Lipid Profile (water permitted). HbA1c requires no fasting.',
    },
    {
      id: 'COLLECTION',
      title: 'Home Collection Scheduling',
      prompt: '"Book phlebotomist for blood sample collection at Kolhapur address tomorrow 7 AM."',
      response: 'Home collection slot registered for 07:00 AM–07:30 AM tomorrow. Phlebotomist details sent via SMS.',
    },
    {
      id: 'HUMAN_ROUTING',
      title: 'Human Coordinator Handoff',
      prompt: '"I have a complex histopathology referral letter from my oncologist."',
      response: 'Routing immediately to Senior Medical Coordinator Dr. Mehta. Connection established in 30 seconds.',
    },
  ];

  return (
    <section id="assist" className="py-14 sm:py-20 lg:py-28 bg-[#0A0F0D] border-b border-[#26312D]">
      <Container>
        {/* Header Label */}
        <div className="flex items-center gap-3 font-mono text-xs text-[#7E8984] tracking-[0.2em] mb-6">
          <span className="text-[#4DB6A3] font-semibold">05</span>
          <span className="text-[#26312D]">—</span>
          <span>ASSIST</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Headline & Copy Column (~5 cols) */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <h2 className="font-sans text-3xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.05em] text-[#F5F3EA] leading-[0.96]">
              Ask.<br />
              Book.<br />
              <span className="font-editorial italic font-normal text-[#4DB6A3]">Confirm.</span>
            </h2>

            <p className="text-[#7E8984] text-sm sm:text-base leading-relaxed font-sans">
              Our automated voice and chat assistant handles routine booking queries, test preparation guidelines, and sample scheduling 24/7—seamlessly escalating to human coordinators whenever nuanced clinical care is required.
            </p>

            <div className="p-4 bg-[#151C19] border border-[#26312D] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#4DB6A3] font-bold">
                <UserCheck className="w-4 h-4 stroke-[1.5] shrink-0" />
                <span>HUMAN-IN-THE-LOOP GUARANTEE</span>
              </div>
              <p className="text-xs text-[#7E8984] font-sans leading-relaxed">
                Complex prescriptions, critical STAT requests, and specialized oncology panels are automatically routed to senior medical coordinators.
              </p>
            </div>

            <div className="pt-2">
              <Link to="/book" className="block sm:inline-block">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto justify-center"
                >
                  TEST RECEPTIONIST DEMO →
                </Button>
              </Link>
            </div>
          </div>

          {/* Interactive AI Assistant Demo Box (~7 cols) */}
          <div className="lg:col-span-7 w-full max-w-full">
            <div className="border border-[#26312D] bg-[#101613] p-4 sm:p-6 space-y-5">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 pb-4 border-b border-[#26312D] font-mono text-xs text-[#7E8984]">
                <span>AUTOMATED PATIENT ASSISTANT DEMO</span>
                <span className="text-[#4DB6A3] font-semibold">24/7 ACTIVE</span>
              </div>

              {/* Topic Selector Tabs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {capabilities.map((cap, idx) => (
                  <button
                    key={cap.id}
                    onClick={() => setSelectedTopic(idx)}
                    className={`p-3 text-left font-mono text-xs border transition-colors cursor-pointer min-h-[44px] ${
                      selectedTopic === idx
                        ? 'bg-[#151C19] border-[#4DB6A3] text-[#F5F3EA]'
                        : 'bg-[#0A0F0D] border-[#26312D] text-[#7E8984] hover:border-[#7E8984]'
                    }`}
                  >
                    <span className="block text-[10px] text-[#4DB6A3] mb-0.5">0{idx+1}</span>
                    <span className="font-semibold block truncate">{cap.title}</span>
                  </button>
                ))}
              </div>

              {/* Simulated Exchange */}
              <div className="bg-[#151C19] border border-[#26312D] p-4 sm:p-5 space-y-4">
                
                {/* User Prompt */}
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-[#7E8984] uppercase">PATIENT QUERY:</span>
                  <div className="p-3 bg-[#0A0F0D] border border-[#26312D] font-mono text-xs text-[#F5F3EA] leading-relaxed">
                    {capabilities[selectedTopic].prompt}
                  </div>
                </div>

                {/* AI Response */}
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between font-mono text-[10px] gap-1">
                    <span className="text-[#4DB6A3] uppercase">AI RECEPTIONIST RESPONSE:</span>
                    <span className="text-[#7E8984]">RESPONSE TIME: 120ms</span>
                  </div>
                  <div className="p-3.5 sm:p-4 bg-[#101613] border border-[#4DB6A3]/60 font-sans text-xs sm:text-sm text-[#F5F3EA] leading-relaxed">
                    {capabilities[selectedTopic].response}
                  </div>
                </div>

              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-[#7E8984] gap-2 pt-1">
                <span>Integrated with Krsnaa LIMS & PACS dispatch API</span>
                <span className="text-[#4DB6A3] font-semibold">Sub-30s Human Handoff</span>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
