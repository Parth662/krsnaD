import React, { useState } from 'react';
import Container from '../ui/Container';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { Activity, ArrowRight, Dna, Stethoscope, Cpu, CheckCircle2 } from 'lucide-react';

export default function DiagnosticsGrid({ onBookClick }) {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'PATH-01',
      num: '01',
      title: 'Pathology & Molecular Testing',
      description: 'Comprehensive blood biochemistry, hematology, immunology, and advanced PCR molecular diagnostic testing certified under NABL and ISO 15189 quality standards.',
      icon: Activity,
      testCount: '1,200+ Tests',
      highlights: [
        'Complete Blood Count (CBC) & HbA1c',
        'Advanced Lipid Profile & Cardiac Risk Markers',
        'Thyroid Profile & Hormone Panels',
        'Real-time PCR & Infectious Disease Panels',
      ],
      turnaround: 'Sub-4 Hours',
    },
    {
      id: 'RAD-02',
      num: '02',
      title: 'Radiology & Advanced Imaging',
      description: 'High-field 3.0T MRI, 128-slice CT Scans, Digital Mammography, Color Doppler Ultrasound, and Digital X-Ray with 24/7 tele-radiology reporting.',
      icon: Cpu,
      testCount: '350+ Scans',
      highlights: [
        '3.0T High-Resolution MRI Scanning',
        'Multi-Slice Coronary CT Angiography',
        'Digital Mammography & DEXA Bone Densitometry',
        '24/7 STAT Tele-Radiology Interpretations',
      ],
      turnaround: 'Sub-2 Hours (STAT)',
    },
    {
      id: 'PREV-03',
      num: '03',
      title: 'Preventive Health Packages',
      description: 'Curated wellness and risk-profiling packages designed for early detection of lifestyle disorders, cardiac risk, diabetes, and organ function analysis.',
      icon: Stethoscope,
      testCount: '45+ Packages',
      highlights: [
        'Full Body Executive Health Screening',
        'Comprehensive Senior Citizen Profile',
        'Women Wellness & Thyroid Screening',
        'Diabetic Risk & Renal Health Audit',
      ],
      turnaround: 'Same-Day Digital Report',
    },
    {
      id: 'SPEC-04',
      num: '04',
      title: 'Specialized & Genomic Diagnostics',
      description: 'Sub-specialty histopathology, oncological biomarker profiling, cytogenetics, and next-generation sequencing for targeted precision treatment.',
      icon: Dna,
      testCount: '180+ Special Tests',
      highlights: [
        'Oncology Biomarkers & Tumor Markers',
        'Histopathology & Immunohistochemistry (IHC)',
        'Genetic Carrier Screening & NGS Panels',
        'Autoimmune Antibody Profiling',
      ],
      turnaround: '24–48 Hours',
    },
  ];

  return (
    <section id="diagnostics" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#0052CC] uppercase tracking-widest font-semibold mb-2">
              <span>[03] DIAGNOSTIC CAPABILITIES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B132B] tracking-tight">
              Clinical Diagnostic Disciplines
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-slate-500">
              1,500+ INDIVIDUAL TEST PROCEDURES
            </span>
          </div>
        </div>

        {/* Large Editorial List Grid */}
        <div className="space-y-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === idx;

            return (
              <div
                key={cat.id}
                onClick={() => setActiveCategory(idx)}
                className={`bg-white border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#0052CC] shadow-md ring-1 ring-[#0052CC]'
                    : 'border-slate-200 hover:border-slate-400'
                }`}
              >
                {/* Header Strip */}
                <div className="flex items-center justify-between px-6 py-3 bg-slate-50 border-b border-slate-200 text-xs font-mono">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[#0052CC]">[{cat.num}]</span>
                    <span className="text-slate-600 font-semibold">{cat.id}</span>
                  </div>

                  <div className="flex items-center gap-4 text-slate-500">
                    <span>CAPACITY: {cat.testCount}</span>
                    <span className="hidden sm:inline">|</span>
                    <span className="hidden sm:inline text-emerald-600 font-semibold">TAT: {cat.turnaround}</span>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-[#EFF6FF] text-[#0052CC] flex items-center justify-center font-bold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0B132B]">
                        {cat.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                      {cat.description}
                    </p>

                    <div className="pt-2">
                      <Button
                        variant={isSelected ? 'primary' : 'secondary'}
                        size="sm"
                        showArrow
                        onClick={(e) => {
                          e.stopPropagation();
                          onBookClick?.();
                        }}
                      >
                        Explore {cat.title.split(' ')[0]} Tests
                      </Button>
                    </div>
                  </div>

                  {/* Right Highlights Column */}
                  <div className="lg:col-span-6 bg-slate-50 border border-slate-200 p-5 space-y-3">
                    <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block font-semibold">
                      INCLUDED KEY DIAGNOSTIC PROCEDURES
                    </span>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                      {cat.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                          <span className="leading-snug">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
