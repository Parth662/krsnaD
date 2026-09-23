import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHero from '../components/ui/PageHero';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Search, Clock, Activity, CalendarCheck } from 'lucide-react';

export default function TestsDiagnosticsPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = [
    { id: 'ALL', label: 'All Tests & Packages' },
    { id: 'PATHOLOGY', label: 'Pathology & Blood' },
    { id: 'RADIOLOGY', label: '3.0T MRI & CT Scans' },
    { id: 'PREVENTIVE', label: 'Preventive Health Care' },
    { id: 'CARDIAC', label: 'Cardiac & Heart' },
    { id: 'DIABETES', label: 'Diabetes & Renal' },
  ];

  const testsList = [
    {
      id: 'TST-01',
      title: 'Preventive Full Body Health Profile',
      category: 'PREVENTIVE',
      categoryLabel: 'Preventive Package',
      parametersCount: 68,
      desc: 'Complete health evaluation covering Lipid Profile, Kidney Function, Liver Profile, HbA1c, Vitamin D/B12, Thyroid, CBC & Urine Routine.',
      fasting: '10–12 Hours Fasting Required',
      sampleType: 'Blood (Venous) & Urine',
      tat: 'Sub-12 Hours TAT',
      nabl: true,
      popular: true,
    },
    {
      id: 'TST-02',
      title: 'Advanced Lipid & Cardiac Risk Marker Panel',
      category: 'CARDIAC',
      categoryLabel: 'Cardiac Panel',
      parametersCount: 12,
      desc: 'Screening for cardiovascular risk with High-Sensitivity CRP, Apolipoprotein A1/B, Total Cholesterol, HDL, LDL, and Triglycerides.',
      fasting: '10–12 Hours Fasting Required',
      sampleType: 'Blood Serum',
      tat: 'Sub-6 Hours TAT',
      nabl: true,
      popular: true,
    },
    {
      id: 'TST-03',
      title: '3.0T High-Field Brain MRI & MR Angiography',
      category: 'RADIOLOGY',
      categoryLabel: 'Advanced Radiology',
      parametersCount: 1,
      desc: 'Sub-millimeter resolution neuro imaging using 3.0 Tesla Silent Scan technology for stroke, tumor, and vascular assessment.',
      fasting: 'No Fasting Required (Non-Contrast)',
      sampleType: 'In-Clinic Imaging Scan',
      tat: 'Same Day Tele-Radiology Signoff',
      nabl: true,
      popular: false,
    },
    {
      id: 'TST-04',
      title: 'HbA1c & Glycated Hemoglobin Profile',
      category: 'DIABETES',
      categoryLabel: 'Diabetes Monitoring',
      parametersCount: 3,
      desc: 'Gold-standard HPLC method for 3-month average blood glucose level, average blood glucose (eAG), and fasting sugar check.',
      fasting: 'Fasting Recommended',
      sampleType: 'EDTA Whole Blood',
      tat: 'Sub-4 Hours STAT TAT',
      nabl: true,
      popular: true,
    },
    {
      id: 'TST-05',
      title: '128-Slice Cardiac CT Coronary Angiography',
      category: 'RADIOLOGY',
      categoryLabel: 'Advanced Radiology',
      parametersCount: 1,
      desc: 'Non-invasive 3D visualization of coronary arteries, plaque burden, and calcium score with ultra-low radiation dose protocol.',
      fasting: '4 Hours Fasting Required',
      sampleType: 'In-Clinic CT Scan',
      tat: '4-Hour Radiologist Report',
      nabl: true,
      popular: false,
    },
    {
      id: 'TST-06',
      title: 'Thyroid Function Panel (T3, T4, Ultra TSH)',
      category: 'PATHOLOGY',
      categoryLabel: 'Endocrine Panel',
      parametersCount: 3,
      desc: 'Chemiluminescence Immunoassay (CLIA) measurement of Total T3, Total T4, and Ultra-sensitive TSH for thyroid gland evaluation.',
      fasting: 'Morning Sample Preferred',
      sampleType: 'Blood Serum',
      tat: 'Sub-6 Hours TAT',
      nabl: true,
      popular: false,
    },
  ];

  const filteredTests = testsList.filter((test) => {
    const matchesCategory = selectedCategory === 'ALL' || test.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleBookTest = (testTitle) => {
    navigate(`/book?test=${encodeURIComponent(testTitle)}`);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] font-sans antialiased selection:bg-[#0F766E]/10 selection:text-[#0F766E]">
      <Navbar />

      <main>
        {/* Page Hero */}
        <PageHero
          eyebrow="01 — DIAGNOSTIC DISCOVERY"
          title="Precision Diagnostic Testing"
          highlight="NABL Accredited & Fast TAT"
          description="Explore our complete menu of NABL verified pathology tests, high-field 3.0T MRI imaging, multi-slice CT angiography, and preventive health packages across 150+ cities."
          stats={[
            { value: '68+', label: 'Preventive Parameters' },
            { value: 'NABL', label: 'MC-2940 Accredited' },
            { value: 'Sub-2 Hr', label: 'STAT Pathology TAT' },
            { value: '1,800+', label: 'Collection Centers' },
          ]}
        >
          <Link to="/book" className="block sm:inline-block">
            <Button variant="primary" size="lg" icon={CalendarCheck} className="w-full sm:w-auto justify-center">
              BOOK ANY TEST ONLINE
            </Button>
          </Link>
          <Link to="/home-collection" className="block sm:inline-block">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto justify-center">
              LEARN HOME COLLECTION
            </Button>
          </Link>
        </PageHero>

        {/* Search & Category Filter Section */}
        <section className="py-10 sm:py-16 bg-[#FAFAF8] border-b border-[#E8E4DF]">
          <Container>
            
            {/* Search Input Bar & Category Tabs */}
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-[#E8E4DF]">
                <div className="relative flex-grow max-w-xl">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search test by name (e.g. Lipid, MRI, HbA1c, Thyroid, Kidney)..."
                    className="w-full bg-white border border-[#E8E4DF] text-[#1A1A1A] text-sm font-sans px-4 py-3 pl-11 focus:outline-none focus:border-[#0F766E] rounded-md shadow-xs min-h-[44px]"
                  />
                  <Search className="w-5 h-5 text-[#6B6B6B] absolute left-3.5 top-3.5 stroke-[1.75]" />
                </div>

                <div className="font-mono-meta text-xs text-[#6B6B6B] flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#0F766E] stroke-[1.75]" />
                  <span>Showing {filteredTests.length} Verified Tests</span>
                </div>
              </div>

              {/* Category Pills — Horizontally Scrollable on Mobile */}
              <div className="flex overflow-x-auto no-scrollbar gap-2 pb-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 text-xs font-sans rounded-md border transition-all shrink-0 min-h-[40px] ${
                      selectedCategory === cat.id
                        ? 'bg-[#0F766E] text-white border-[#0F766E] font-medium shadow-xs'
                        : 'bg-white text-[#6B6B6B] border-[#E8E4DF] hover:bg-[#F5F3F0] hover:text-[#1A1A1A]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Test Cards List */}
            <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTests.map((test) => (
                <div
                  key={test.id}
                  className="bg-white border border-[#E8E4DF] p-5 sm:p-7 rounded-md shadow-xs hover:border-[#CBD5E1] transition-all flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="font-mono-meta text-[11px] text-[#0F766E] font-bold bg-[#F0FDFA] px-2.5 py-0.5 border border-[#CCFBF1] rounded-xs">
                        {test.categoryLabel}
                      </span>
                      {test.popular && (
                        <span className="font-mono-meta text-[10px] text-[#1A1A1A] font-semibold bg-[#F5F3F0] px-2 py-0.5 rounded-xs">
                          ★ FREQUENTLY BOOKED
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif-heading font-bold text-lg sm:text-xl text-[#1A1A1A]">
                      {test.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                      {test.desc}
                    </p>

                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#6B6B6B] border-t border-[#E8E4DF]">
                      <div>
                        <span className="text-[10px] uppercase font-mono-meta text-[#6B6B6B] block">Sample / Method</span>
                        <span className="text-[#1A1A1A] font-medium">{test.sampleType}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono-meta text-[#6B6B6B] block">Preparation</span>
                        <span className="text-[#1A1A1A] font-medium">{test.fasting}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E8E4DF] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2 font-mono-meta text-xs text-[#0F766E]">
                      <Clock className="w-3.5 h-3.5 stroke-[1.75]" />
                      <span className="font-semibold">{test.tat}</span>
                    </div>

                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleBookTest(test.title)}
                      className="w-full sm:w-auto justify-center"
                    >
                      Book This Test →
                    </Button>
                  </div>
                </div>
              ))}
            </div>

          </Container>
        </section>

        {/* Quality Assurance Footer Banner */}
        <section className="py-12 sm:py-16 bg-[#F5F3F0] border-b border-[#E8E4DF]">
          <Container>
            <div className="max-w-3xl space-y-4">
              <span className="font-mono-meta text-xs text-[#0F766E] uppercase font-semibold block">
                NABL ISO 15189 QUALITY GUARANTEE
              </span>
              <h2 className="font-serif-heading text-xl sm:text-3xl font-semibold text-[#1A1A1A]">
                Every sample processed under statutory clinical guidelines.
              </h2>
              <p className="text-[#6B6B6B] text-xs sm:text-sm leading-relaxed font-sans">
                Krsnaa Diagnostics enforces cold-chain specimen transportation, barcode sample tracking, dual pathologist review, and automated analyzer calibration across all reference hubs.
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
