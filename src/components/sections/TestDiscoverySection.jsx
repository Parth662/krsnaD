import React, { useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Search, ChevronDown, Check, X, ArrowRight } from 'lucide-react';

export default function TestDiscoverySection({ onBookClick }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      id: 'PATHOLOGY',
      num: '01',
      title: 'Pathology & Biochemistry',
      sub: 'Routine blood profiles, metabolic audits, and infectious panels.',
      count: '1,200+ Tests',
      tat: 'Sub-4 Hours',
      description: 'Comprehensive blood biochemistry, hematology, immunology, and real-time PCR testing certified under NABL and ISO 15189 quality standards.',
      tests: [
        'Complete Blood Count (CBC) with ESR',
        'HbA1c & Fasting Blood Glucose',
        'Lipid Profile & Cardiac Risk Assessment',
        'Thyroid Profile (T3, T4, TSH)',
        'Kidney & Liver Function Test (KFT & LFT)',
      ]
    },
    {
      id: 'RADIOLOGY',
      num: '02',
      title: 'Radiology & Imaging',
      sub: 'High-resolution 3.0T MRI, 128-slice CT Scans, Mammography & Ultrasound.',
      count: '350+ Scans',
      tat: 'Sub-2 Hours (STAT)',
      description: 'High-field 3.0T MRI, 128-slice CT Scans, Digital Mammography, and Doppler Ultrasound with 24/7 tele-radiology reporting by specialist radiologists.',
      tests: [
        'High-Resolution 3.0T Brain MRI',
        '128-Slice Coronary CT Angiography',
        'Whole Body PET-CT Scan',
        'Digital Mammography & Ultrasound',
        'Digital X-Ray & Bone Densitometry (DEXA)',
      ]
    },
    {
      id: 'CARDIAC',
      num: '03',
      title: 'Non-Invasive Cardiology',
      sub: '2D Echocardiogram, TMT Stress Test & Holter Monitoring.',
      count: '80+ Tests',
      tat: 'Same-Day Reporting',
      description: 'Comprehensive non-invasive cardiology testing including 2D Echo, TMT Stress Test, 24-Hour Holter Monitoring, and High-Sensitivity Cardiac Biomarkers.',
      tests: [
        '2D Echocardiogram & Color Doppler',
        'Treadmill Test (TMT Stress Test)',
        '24-Hour Holter ECG Monitoring',
        'High-Sensitivity Troponin I (hs-cTnI)',
        'NT-proBNP Cardiac Strain Marker',
      ]
    },
    {
      id: 'PACKAGES',
      num: '04',
      title: 'Preventive Health Checkups',
      sub: 'Curated wellness packages for early detection & risk profiling.',
      count: '45+ Packages',
      tat: '24 Hours',
      description: 'Curated wellness packages designed for early detection of metabolic disorders, organ health analysis, and comprehensive risk profiling.',
      tests: [
        'Krsnaa Master Health Checkup (85+ Parameters)',
        'Senior Citizen Comprehensive Care Profile',
        'Women Wellness & Thyroid Screening',
        'Executive Cardiac & Diabetic Audit',
        'Pre-Operative Health Screening',
      ]
    },
    {
      id: 'GENOMICS',
      num: '05',
      title: 'Genomics & Special Diagnostics',
      sub: 'Sub-specialty histopathology, oncology biomarkers & molecular PCR.',
      count: '180+ Special Tests',
      tat: '24–48 Hours',
      description: 'Sub-specialty histopathology, oncological biomarker profiling, cytogenetics, and next-generation sequencing for targeted precision medicine.',
      tests: [
        'Oncology Tumor Markers (CEA, PSA, CA-125)',
        'Histopathology & Immunohistochemistry (IHC)',
        'Liquid Biopsy & Circulating Tumor DNA',
        'Next-Gen Sequencing (NGS) Panel',
        'Autoimmune Antibody Profile',
      ]
    },
  ];

  const filteredCategories = searchQuery
    ? categories.filter(c => 
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.sub.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.tests.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : categories;

  return (
    <section id="discover" className="py-20 sm:py-24 bg-[#FAFAF8] border-b border-[#E8E4DF]">
      <Container>
        {/* Editorial Eyebrow & Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 pb-8 border-b border-[#E8E4DF]">
          
          <div className="lg:col-span-7 space-y-3">
            <span className="font-mono-meta text-xs font-semibold text-[#0F766E] uppercase tracking-[0.15em] block">
              01 — TESTS & PACKAGES
            </span>

            <h2 className="font-serif-heading text-4xl sm:text-5xl font-semibold text-[#1A1A1A] tracking-tight">
              Comprehensive Diagnostic Catalogue
            </h2>

            <p className="text-[#6B6B6B] text-base font-sans leading-relaxed">
              Explore standardized pathological procedures, advanced imaging scans, and preventive wellness profiles.
            </p>
          </div>

          {/* Search Bar */}
          <div className="lg:col-span-5">
            <label htmlFor="test-catalogue-search" className="block font-sans text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider mb-2">
              Search Diagnostic Catalogue
            </label>

            <div className="relative">
              <input
                id="test-catalogue-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search blood tests, MRI scans, or packages..."
                className="w-full bg-white border border-[#E8E4DF] text-[#1A1A1A] placeholder-[#6B6B6B] text-sm font-sans px-4 py-3 pl-11 focus:outline-none focus:border-[#0F766E] transition-colors rounded-md shadow-xs"
              />
              <Search className="w-4 h-4 text-[#6B6B6B] absolute left-4 top-3.5 stroke-[1.75]" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-3.5 text-[#6B6B6B] hover:text-[#1A1A1A]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Clean Editorial Catalogue Cards */}
        <div className="space-y-4">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat) => {
              const isOpen = activeCategory === cat.id;

              return (
                <div
                  key={cat.id}
                  className="bg-white border border-[#E8E4DF] rounded-md shadow-xs transition-all overflow-hidden"
                >
                  {/* Category Header Row */}
                  <div
                    onClick={() => setActiveCategory(isOpen ? null : cat.id)}
                    className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#F5F3F0]/50 transition-colors"
                  >
                    <div className="space-y-1 max-w-2xl">
                      <div className="flex items-center gap-3 font-mono-meta text-xs text-[#6B6B6B]">
                        <span className="text-[#0F766E] font-bold">[{cat.num}]</span>
                        <span className="font-semibold text-[#1A1A1A]">{cat.count}</span>
                        <span>•</span>
                        <span>{cat.tat}</span>
                      </div>

                      <h3 className="font-serif-heading text-2xl font-bold text-[#1A1A1A] hover:text-[#0F766E] transition-colors">
                        {cat.title}
                      </h3>

                      <p className="text-sm text-[#6B6B6B] font-sans">
                        {cat.sub}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 shrink-0 pt-2 md:pt-0">
                      <span className="text-xs font-sans font-medium text-[#0F766E] hidden sm:inline">
                        {isOpen ? 'Hide Details' : 'View Tests & Pricing'}
                      </span>

                      <div className={`w-8 h-8 rounded-full border border-[#E8E4DF] flex items-center justify-center transition-transform duration-200 ${
                        isOpen ? 'bg-[#F0FDFA] text-[#0F766E] rotate-180' : 'text-[#6B6B6B]'
                      }`}>
                        <ChevronDown className="w-4 h-4 stroke-[1.75]" />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Category Panel */}
                  {isOpen && (
                    <div className="p-6 bg-[#F5F3F0]/60 border-t border-[#E8E4DF] space-y-6">
                      <p className="text-sm text-[#1A1A1A] font-sans leading-relaxed max-w-3xl">
                        {cat.description}
                      </p>

                      <div className="space-y-3">
                        <span className="font-sans text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider block">
                          Included Diagnostic Procedures:
                        </span>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                          {cat.tests.map((test, tIdx) => (
                            <div key={tIdx} className="bg-white border border-[#E8E4DF] p-3 rounded-sm flex items-center justify-between text-xs sm:text-sm text-[#1A1A1A]">
                              <span className="font-sans font-medium truncate">{test}</span>
                              <Check className="w-4 h-4 text-[#0F766E] shrink-0 ml-2 stroke-[1.75]" />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                        <Button
                          variant="primary"
                          size="md"
                          onClick={onBookClick}
                        >
                          Book {cat.title} Test
                        </Button>

                        <span className="font-sans text-xs text-[#6B6B6B]">
                          NABL Accredited • Home Sample Collection Available
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="py-12 text-center text-[#6B6B6B] font-sans text-sm bg-white border border-[#E8E4DF] rounded-md">
              No diagnostic procedures found matching "{searchQuery}".
            </div>
          )}
        </div>

      </Container>
    </section>
  );
}

