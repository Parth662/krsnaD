import React, { useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Search, PhoneCall, Clock, Navigation } from 'lucide-react';

export default function NetworkSection({ onCentersClick }) {
  const [selectedCity, setSelectedCity] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const centres = [
    {
      id: 'KRN-PNE-01',
      name: 'Pune Central Diagnostic Hub',
      city: 'Pune',
      area: 'Deccan Gymkhana, Pune',
      address: 'Plot 48, Bhandarkar Road, Deccan Gymkhana, Pune 411004',
      hours: '24 Hours / 7 Days (STAT Pathology & Emergency Scans)',
      phone: '+91 20 2567 8900',
      services: ['3.0T MRI', '128-Slice CT', 'NABL Pathology', 'Mammography', '2D Echo'],
    },
    {
      id: 'KRN-KOL-02',
      name: 'Kolhapur Regional Diagnostic Centre',
      city: 'Kolhapur',
      area: 'Tarabai Park, Kolhapur',
      address: 'Near Old Campus, Tarabai Park, Kolhapur 416003',
      hours: '06:30 AM – 09:30 PM (Daily)',
      phone: '+91 231 265 4321',
      services: ['High-Field MRI', 'Multi-Slice CT', 'Routine & Special Pathology', 'Ultrasound'],
    },
    {
      id: 'KRN-BOM-03',
      name: 'Mumbai Metro Tele-Radiology Hub',
      city: 'Mumbai',
      area: 'Andheri East, Mumbai',
      address: 'MIDC Central Avenue, Andheri East, Mumbai 400093',
      hours: '24 Hours / 7 Days (Central Tele-Radiology Command)',
      phone: '+91 22 6789 1234',
      services: ['Tele-Radiology', 'Molecular PCR', 'Genomics', 'Cardiac CT'],
    },
    {
      id: 'KRN-BLR-04',
      name: 'Bengaluru Precision Diagnostics',
      city: 'Bengaluru',
      area: 'Indiranagar, Bengaluru',
      address: '100 Feet Road, Indiranagar, Bengaluru 560038',
      hours: '07:00 AM – 09:00 PM (Mon–Sat)',
      phone: '+91 80 4123 5678',
      services: ['Next-Gen Sequencing', '3.0T MRI', 'Preventive Health Care', 'Mammography'],
    },
    {
      id: 'KRN-DEL-05',
      name: 'Delhi NCR Diagnostic Center',
      city: 'Delhi NCR',
      area: 'Connaught Place, New Delhi',
      address: 'Outer Circle, Connaught Place, New Delhi 110001',
      hours: '24 Hours / 7 Days (STAT Emergency Pathology)',
      phone: '+91 11 4321 8765',
      services: ['High-Throughput Biochemistry', 'PET-CT', 'Ultrasound', 'Cardiac Screening'],
    },
  ];

  const cities = ['ALL', 'Pune', 'Kolhapur', 'Mumbai', 'Bengaluru', 'Delhi NCR'];

  const filteredCentres = centres.filter(c => {
    const matchesCity = selectedCity === 'ALL' || c.city === selectedCity;
    const matchesSearch = !searchQuery || 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCity && matchesSearch;
  });

  return (
    <section id="centres" className="py-14 sm:py-20 lg:py-24 bg-[#FAFAF8] border-b border-[#E8E4DF]">
      <Container>
        
        {/* Eyebrow */}
        <span className="font-mono-meta text-xs font-semibold text-[#0F766E] uppercase tracking-[0.15em] block mb-3">
          03 — OUR CENTRES
        </span>

        {/* Headline & City Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 sm:mb-12 pb-6 sm:pb-8 border-b border-[#E8E4DF]">
          
          <div className="lg:col-span-6 space-y-3">
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-semibold text-[#1A1A1A] tracking-tight">
              Locate a Diagnostic Centre Near You
            </h2>

            <p className="text-[#6B6B6B] text-sm sm:text-base font-sans leading-relaxed">
              Find state-of-the-art diagnostic facilities across 150+ cities with walk-in testing and 24/7 STAT emergency reporting.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by area, city or pincode..."
                className="w-full bg-white border border-[#E8E4DF] text-[#1A1A1A] placeholder-[#6B6B6B] text-sm font-sans px-4 py-2.5 pl-10 focus:outline-none focus:border-[#0F766E] rounded-md shadow-xs min-h-[44px]"
              />
              <Search className="w-4 h-4 text-[#6B6B6B] absolute left-3.5 top-3.5 stroke-[1.75]" />
            </div>

            {/* City Tabs */}
            <div className="flex overflow-x-auto no-scrollbar gap-2 text-xs font-sans pb-1">
              {cities.map(city => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-3.5 py-2 rounded-md border transition-colors shrink-0 min-h-[40px] ${
                    selectedCity === city
                      ? 'bg-[#0F766E] text-white border-[#0F766E] font-medium'
                      : 'bg-white text-[#6B6B6B] border-[#E8E4DF] hover:bg-[#F5F3F0] hover:text-[#1A1A1A]'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Centre Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCentres.map((centre) => (
            <div
              key={centre.id}
              className="bg-white border border-[#E8E4DF] p-5 sm:p-7 rounded-md shadow-xs hover:border-[#CBD5E1] transition-all space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E4DF] font-mono-meta text-xs text-[#6B6B6B]">
                  <span className="text-[#0F766E] font-semibold">[{centre.id}]</span>
                  <span className="bg-[#F5F3F0] px-2 py-0.5 rounded-xs text-[#1A1A1A]">{centre.city}</span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif-heading font-bold text-lg sm:text-2xl text-[#1A1A1A]">
                    {centre.name}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#6B6B6B]">
                    {centre.address}
                  </p>
                </div>

                {/* Hours & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-sans text-xs text-[#6B6B6B]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#0F766E] shrink-0 stroke-[1.75]" />
                    <span className="truncate">{centre.hours}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-[#0F766E] shrink-0 stroke-[1.75]" />
                    <span>{centre.phone}</span>
                  </div>
                </div>

                {/* Services Tags */}
                <div className="space-y-1.5 pt-1">
                  <span className="font-sans text-[11px] font-semibold text-[#6B6B6B] uppercase tracking-wider block">
                    Available Facilities:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {centre.services.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-sans text-xs px-2.5 py-0.5 bg-[#F5F3F0] text-[#1A1A1A] rounded-xs"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-[#E8E4DF] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <Button
                  variant="secondary"
                  size="sm"
                  icon={Navigation}
                  onClick={onCentersClick}
                  className="w-full sm:w-auto justify-center"
                >
                  Get Directions
                </Button>

                <span className="font-sans text-xs text-[#6B6B6B] text-center sm:text-right">
                  Walk-ins & Appointments Welcome
                </span>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
