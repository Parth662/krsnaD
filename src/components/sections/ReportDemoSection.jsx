import React, { useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Search, Download, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ReportDemoSection() {
  const [reportIdInput, setReportIdInput] = useState('KD-84920-X');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const sampleReport = {
    id: 'KD-84920-X',
    patientName: 'DEMO PATIENT (CONFIDENTIAL)',
    ageGender: '42 Yrs / Male',
    refDoctor: 'Dr. R. Mehta, MD Cardiology',
    testName: 'Advanced Lipid & Cardiac Risk Marker Panel',
    collectionDate: '21-SEP-2026 08:30 AM',
    reportingDate: '21-SEP-2026 11:15 AM',
    labLocation: 'Pune Central Hub (NABL MC-2940)',
    status: 'VERIFIED & SIGNED',
    signatory: 'Dr. A. Kulkarni, MD Pathology (Reg No. 89201)',
    parameters: [
      { name: 'Total Cholesterol', result: '172 mg/dL', refRange: '< 200 mg/dL', status: 'OPTIMAL' },
      { name: 'HDL Cholesterol (Good)', result: '54 mg/dL', refRange: '> 40 mg/dL', status: 'OPTIMAL' },
      { name: 'LDL Cholesterol (Calculated)', result: '98 mg/dL', refRange: '< 100 mg/dL', status: 'NORMAL' },
      { name: 'Triglycerides', result: '110 mg/dL', refRange: '< 150 mg/dL', status: 'NORMAL' },
      { name: 'High-Sensitivity CRP (hs-CRP)', result: '0.8 mg/L', refRange: '< 1.0 mg/L (Low Risk)', status: 'OPTIMAL' },
      { name: 'HbA1c (Glycated Hemoglobin)', result: '5.4 %', refRange: '4.0 - 5.6 % (Normal)', status: 'NORMAL' },
    ],
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="reports" className="py-14 sm:py-20 lg:py-24 bg-[#FAFAF8] border-b border-[#E8E4DF]">
      <Container>
        
        {/* Eyebrow */}
        <span className="font-mono-meta text-xs font-semibold text-[#0F766E] uppercase tracking-[0.15em] block mb-3">
          07 — PATIENT PORTAL
        </span>

        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-6 sm:gap-8 pb-6 sm:pb-8 border-b border-[#E8E4DF]">
          <div>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-semibold text-[#1A1A1A] tracking-tight">
              Instant Access to Your Diagnostic Reports
            </h2>
          </div>

          <p className="text-[#6B6B6B] text-sm sm:text-base font-sans max-w-md">
            Enter your unique Report ID or registered mobile number to view digitally signed NABL reports online 24/7.
          </p>
        </div>

        {/* Search & Interactive Demo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column — Report Search Form (~4 cols) */}
          <div className="lg:col-span-4 bg-white border border-[#E8E4DF] p-5 sm:p-7 rounded-md shadow-xs space-y-5 w-full">
            <div className="space-y-1">
              <span className="font-sans text-xs font-semibold text-[#0F766E] uppercase tracking-wider block">
                Patient Report Portal
              </span>
              <p className="text-xs text-[#6B6B6B] font-sans">
                Access verified diagnostic reports with 256-bit encryption. Demo data loaded below.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="font-sans text-xs font-semibold text-[#1A1A1A] block mb-1">
                  REPORT ID / SAMPLE NO.
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={reportIdInput}
                    onChange={(e) => setReportIdInput(e.target.value)}
                    placeholder="e.g. KD-84920-X"
                    className="w-full bg-[#FAFAF8] border border-[#E8E4DF] text-sm font-sans px-3.5 py-2.5 text-[#1A1A1A] focus:outline-none focus:border-[#0F766E] rounded-md min-h-[44px]"
                  />
                  <Search className="w-4 h-4 text-[#6B6B6B] absolute right-3 top-3.5 stroke-[1.75]" />
                </div>
              </div>

              <div>
                <label className="font-sans text-xs font-semibold text-[#1A1A1A] block mb-1">
                  REGISTERED MOBILE NUMBER
                </label>
                <input
                  type="text"
                  defaultValue="+91 98765 43210"
                  readOnly
                  className="w-full bg-[#F5F3F0] border border-[#E8E4DF] text-sm font-sans px-3.5 py-2.5 text-[#6B6B6B] cursor-not-allowed rounded-md min-h-[44px]"
                />
              </div>

              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => {}}
              >
                Fetch Verified Report
              </Button>
            </div>

            <div className="pt-3 border-t border-[#E8E4DF] text-xs text-[#6B6B6B] space-y-1 font-sans">
              <div className="flex items-center gap-1.5 text-[#0F766E] font-semibold">
                <ShieldCheck className="w-4 h-4 stroke-[1.75]" />
                <span>NABL MC-2940 Digital Sign-Off</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Diagnostic reports are permanently archived under statutory digital health records standards.
              </p>
            </div>
          </div>

          {/* Right Column — Realistic Clean White Report Interface (~8 cols) */}
          <div className="lg:col-span-8 bg-white border border-[#E8E4DF] rounded-md shadow-xs overflow-hidden w-full max-w-full">
            
            {/* Header Bar */}
            <div className="bg-[#F5F3F0] p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#E8E4DF]">
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-mono-meta text-xs flex-wrap">
                  <span className="bg-[#0F766E] text-white px-2 py-0.5 rounded-xs font-medium">
                    VERIFIED REPORT
                  </span>
                  <span className="text-[#0F766E] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[1.75]" />
                    {sampleReport.status}
                  </span>
                </div>
                <h3 className="font-serif-heading font-bold text-lg sm:text-xl text-[#1A1A1A]">
                  {sampleReport.testName}
                </h3>
              </div>

              <div className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="sm"
                  icon={Download}
                  onClick={handleDownload}
                  className="w-full sm:w-auto justify-center"
                >
                  {downloadSuccess ? 'PDF Downloaded' : 'Download PDF'}
                </Button>
              </div>
            </div>

            {/* Patient Metadata Bar */}
            <div className="p-4 sm:p-5 bg-white border-b border-[#E8E4DF] grid grid-cols-2 sm:grid-cols-4 gap-3 font-sans text-xs text-[#6B6B6B]">
              <div>
                <span className="text-[#6B6B6B] block text-[10px] uppercase font-semibold">Report ID</span>
                <span className="font-mono-meta font-bold text-[#1A1A1A] truncate block">{sampleReport.id}</span>
              </div>
              <div>
                <span className="text-[#6B6B6B] block text-[10px] uppercase font-semibold">Patient Name</span>
                <span className="font-medium text-[#1A1A1A] truncate block">{sampleReport.patientName}</span>
              </div>
              <div>
                <span className="text-[#6B6B6B] block text-[10px] uppercase font-semibold">Collection Date</span>
                <span className="text-[#1A1A1A] truncate block">{sampleReport.collectionDate}</span>
              </div>
              <div>
                <span className="text-[#6B6B6B] block text-[10px] uppercase font-semibold">Accredited Lab</span>
                <span className="text-[#1A1A1A] truncate block">{sampleReport.labLocation}</span>
              </div>
            </div>

            {/* Parameters Table */}
            <div className="p-4 sm:p-6 overflow-x-auto no-scrollbar">
              <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[500px]">
                <thead>
                  <tr className="border-b border-[#E8E4DF] font-sans text-[#6B6B6B] text-xs uppercase">
                    <th className="pb-3 font-semibold">Test Parameter</th>
                    <th className="pb-3 font-semibold">Observed Value</th>
                    <th className="pb-3 font-semibold">Reference Range</th>
                    <th className="pb-3 font-semibold text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E4DF]">
                  {sampleReport.parameters.map((param, pIdx) => (
                    <tr key={pIdx} className="hover:bg-[#F5F3F0]/50 transition-colors">
                      <td className="py-3 font-sans font-medium text-[#1A1A1A]">{param.name}</td>
                      <td className="py-3 font-mono-meta font-bold text-[#0F766E]">{param.result}</td>
                      <td className="py-3 font-sans text-[#6B6B6B]">{param.refRange}</td>
                      <td className="py-3 text-right">
                        <span className="inline-block px-2.5 py-0.5 text-xs font-sans font-medium bg-[#F0FDFA] text-[#0F766E] border border-[#CCFBF1] rounded-xs">
                          {param.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Signatory Footer */}
            <div className="p-4 bg-[#F5F3F0] border-t border-[#E8E4DF] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-sans text-[#6B6B6B] gap-2">
              <div>
                <span>Digitally Verified By: </span>
                <span className="text-[#1A1A1A] font-semibold">{sampleReport.signatory}</span>
              </div>
              <span className="font-mono-meta text-[11px]">Hash: 0x8F92A0B9402F...</span>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
