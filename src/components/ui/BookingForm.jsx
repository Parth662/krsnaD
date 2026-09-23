import React, { useState } from 'react';
import Button from './Button';
import { CheckCircle2, Calendar, Clock, MapPin, Home, Building2, User, Phone, Mail } from 'lucide-react';

export default function BookingForm({ defaultTest = '', onSubmitted }) {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    age: '',
    gender: 'Male',
    serviceType: 'home', // 'home' or 'centre'
    testSelected: defaultTest || 'Preventive Full Body Profile (68 Parameters)',
    centre: 'Pune Central Diagnostic Hub (Deccan Gymkhana)',
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    preferredTime: '08:00 AM - 10:00 AM',
    address: '',
    pincode: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const testOptions = [
    'Preventive Full Body Profile (68 Parameters)',
    'Advanced Lipid & Cardiac Risk Panel',
    'Comprehensive Diabetes & Renal Profile',
    'Thyroid Function Panel (T3, T4, TSH)',
    '3.0T High-Field MRI Scan',
    '128-Slice Cardiac CT Scan',
    'Digital Mammography & Breast Health',
    'NABL STAT Emergency Blood Panel',
  ];

  const centresList = [
    'Pune Central Diagnostic Hub (Deccan Gymkhana)',
    'Kolhapur Regional Diagnostic Centre (Tarabai Park)',
    'Mumbai Metro Diagnostic Hub (Andheri East)',
    'Bengaluru Precision Diagnostics (Indiranagar)',
    'Delhi NCR Diagnostic Center (Connaught Place)',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = `KRS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setSubmitted(true);
    if (onSubmitted) onSubmitted(ref);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-[#E8E4DF] p-5 sm:p-8 rounded-md shadow-xs space-y-6 text-left w-full">
        <div className="flex items-center gap-3 font-mono-meta text-xs text-[#0F766E] uppercase tracking-wider bg-[#F0FDFA] p-3.5 border border-[#CCFBF1] rounded-xs">
          <CheckCircle2 className="w-5 h-5 text-[#0F766E] shrink-0 stroke-[1.75]" />
          <div>
            <span className="font-bold">BOOKING CONFIRMED</span> — REFERENCE #{bookingRef}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-serif-heading font-semibold text-xl sm:text-2xl text-[#1A1A1A]">
            Appointment Scheduled Successfully
          </h3>
          <p className="text-[#6B6B6B] text-xs sm:text-sm font-sans leading-relaxed">
            Thank you, <span className="font-medium text-[#1A1A1A]">{formData.patientName}</span>. Your diagnostic request has been logged in our care telemetry system. A dedicated phlebotomist/centre coordinator will reach out shortly.
          </p>
        </div>

        <div className="p-4 bg-[#F5F3F0] border border-[#E8E4DF] rounded-xs space-y-3 text-xs font-sans text-[#1A1A1A]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-[#E8E4DF]">
            <div>
              <span className="text-[#6B6B6B] block font-mono-meta uppercase text-[10px]">Test Requested</span>
              <span className="font-semibold block">{formData.testSelected}</span>
            </div>
            <div>
              <span className="text-[#6B6B6B] block font-mono-meta uppercase text-[10px]">Service Mode</span>
              <span className="font-semibold block">{formData.serviceType === 'home' ? 'Home Sample Collection' : 'Centre Visit'}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div>
              <span className="text-[#6B6B6B] block font-mono-meta uppercase text-[10px]">Scheduled Date & Slot</span>
              <span className="block">{formData.preferredDate} ({formData.preferredTime})</span>
            </div>
            <div>
              <span className="text-[#6B6B6B] block font-mono-meta uppercase text-[10px]">Contact Mobile</span>
              <span className="block">{formData.phone}</span>
            </div>
          </div>
        </div>

        <div className="p-3 bg-[#F0FDFA] border border-[#CCFBF1] rounded-xs text-xs font-sans text-[#0F766E] flex items-center gap-2">
          <span>📲 Confirmation SMS & WhatsApp message with prep guide sent to {formData.phone}.</span>
        </div>

        <Button
          variant="secondary"
          size="md"
          className="w-full justify-center"
          onClick={() => setSubmitted(false)}
        >
          Book Another Appointment →
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#E8E4DF] p-5 sm:p-8 rounded-md shadow-xs space-y-6 w-full max-w-full">
      
      {/* Service Type Selection */}
      <div className="space-y-2">
        <label className="font-sans text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider block">
          01 — CHOOSE SERVICE MODE
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setFormData((p) => ({ ...p, serviceType: 'home' }))}
            className={`p-3.5 sm:p-4 border text-left transition-all rounded-md flex items-start gap-3 min-h-[44px] cursor-pointer ${
              formData.serviceType === 'home'
                ? 'border-[#0F766E] bg-[#F0FDFA] text-[#0F766E]'
                : 'border-[#E8E4DF] bg-white text-[#6B6B6B] hover:bg-[#F5F3F0]'
            }`}
          >
            <Home className="w-5 h-5 shrink-0 mt-0.5 stroke-[1.75]" />
            <div>
              <span className="font-serif-heading font-semibold text-sm text-[#1A1A1A] block">
                Home Collection
              </span>
              <span className="text-[11px] font-sans text-[#6B6B6B] block mt-0.5">
                Certified phlebotomist visits your doorstep
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setFormData((p) => ({ ...p, serviceType: 'centre' }))}
            className={`p-3.5 sm:p-4 border text-left transition-all rounded-md flex items-start gap-3 min-h-[44px] cursor-pointer ${
              formData.serviceType === 'centre'
                ? 'border-[#0F766E] bg-[#F0FDFA] text-[#0F766E]'
                : 'border-[#E8E4DF] bg-white text-[#6B6B6B] hover:bg-[#F5F3F0]'
            }`}
          >
            <Building2 className="w-5 h-5 shrink-0 mt-0.5 stroke-[1.75]" />
            <div>
              <span className="font-serif-heading font-semibold text-sm text-[#1A1A1A] block">
                Centre Visit
              </span>
              <span className="text-[11px] font-sans text-[#6B6B6B] block mt-0.5">
                Walk-in or reserved slot at NABL center
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Select Test / Package */}
      <div className="space-y-2">
        <label className="font-sans text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider block">
          02 — SELECT TEST OR HEALTH PACKAGE
        </label>
        <select
          name="testSelected"
          value={formData.testSelected}
          onChange={handleChange}
          className="w-full bg-[#FAFAF8] border border-[#E8E4DF] text-sm font-sans px-4 py-3 text-[#1A1A1A] focus:outline-none focus:border-[#0F766E] rounded-md min-h-[44px]"
        >
          {testOptions.map((t, idx) => (
            <option key={idx} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Patient Details Grid */}
      <div className="space-y-4 pt-2">
        <label className="font-sans text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider block">
          03 — PATIENT DETAILS
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-sans font-medium text-[#6B6B6B] block mb-1">
              FULL NAME *
            </label>
            <div className="relative">
              <input
                type="text"
                name="patientName"
                required
                value={formData.patientName}
                onChange={handleChange}
                placeholder="e.g. Vikram Sharma"
                className="w-full bg-[#FAFAF8] border border-[#E8E4DF] text-sm font-sans px-4 py-2.5 pl-10 text-[#1A1A1A] focus:outline-none focus:border-[#0F766E] rounded-md min-h-[44px]"
              />
              <User className="w-4 h-4 text-[#6B6B6B] absolute left-3 top-3.5 stroke-[1.75]" />
            </div>
          </div>

          <div>
            <label className="text-xs font-sans font-medium text-[#6B6B6B] block mb-1">
              MOBILE NUMBER (FOR REPORTS) *
            </label>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                required
                pattern="[0-9]{10}"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit Mobile Number"
                className="w-full bg-[#FAFAF8] border border-[#E8E4DF] text-sm font-sans px-4 py-2.5 pl-10 text-[#1A1A1A] focus:outline-none focus:border-[#0F766E] rounded-md min-h-[44px]"
              />
              <Phone className="w-4 h-4 text-[#6B6B6B] absolute left-3 top-3.5 stroke-[1.75]" />
            </div>
          </div>

          <div>
            <label className="text-xs font-sans font-medium text-[#6B6B6B] block mb-1">
              EMAIL ADDRESS (OPTIONAL)
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="vikram@example.com"
                className="w-full bg-[#FAFAF8] border border-[#E8E4DF] text-sm font-sans px-4 py-2.5 pl-10 text-[#1A1A1A] focus:outline-none focus:border-[#0F766E] rounded-md min-h-[44px]"
              />
              <Mail className="w-4 h-4 text-[#6B6B6B] absolute left-3 top-3.5 stroke-[1.75]" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-sans font-medium text-[#6B6B6B] block mb-1">AGE</label>
              <input
                type="number"
                name="age"
                required
                min="1"
                max="120"
                value={formData.age}
                onChange={handleChange}
                placeholder="Yrs"
                className="w-full bg-[#FAFAF8] border border-[#E8E4DF] text-sm font-sans px-3 py-2.5 text-[#1A1A1A] focus:outline-none focus:border-[#0F766E] rounded-md min-h-[44px]"
              />
            </div>
            <div>
              <label className="text-xs font-sans font-medium text-[#6B6B6B] block mb-1">GENDER</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full bg-[#FAFAF8] border border-[#E8E4DF] text-sm font-sans px-3 py-2.5 text-[#1A1A1A] focus:outline-none focus:border-[#0F766E] rounded-md min-h-[44px]"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Location & Slot */}
      <div className="space-y-4 pt-2">
        <label className="font-sans text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider block">
          04 — APPOINTMENT SLOT & LOCATION
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-sans font-medium text-[#6B6B6B] block mb-1">
              PREFERRED DATE
            </label>
            <div className="relative">
              <input
                type="date"
                name="preferredDate"
                required
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full bg-[#FAFAF8] border border-[#E8E4DF] text-sm font-sans px-4 py-2.5 pl-10 text-[#1A1A1A] focus:outline-none focus:border-[#0F766E] rounded-md min-h-[44px]"
              />
              <Calendar className="w-4 h-4 text-[#6B6B6B] absolute left-3 top-3.5 stroke-[1.75]" />
            </div>
          </div>

          <div>
            <label className="text-xs font-sans font-medium text-[#6B6B6B] block mb-1">
              PREFERRED TIME SLOT
            </label>
            <div className="relative">
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full bg-[#FAFAF8] border border-[#E8E4DF] text-sm font-sans px-4 py-2.5 pl-10 text-[#1A1A1A] focus:outline-none focus:border-[#0F766E] rounded-md min-h-[44px]"
              >
                <option>06:30 AM - 08:00 AM (Early Fasting)</option>
                <option>08:00 AM - 10:00 AM (Morning Peak)</option>
                <option>10:00 AM - 12:00 PM (Midday)</option>
                <option>02:00 PM - 05:00 PM (Afternoon)</option>
                <option>05:00 PM - 08:00 PM (Evening)</option>
              </select>
              <Clock className="w-4 h-4 text-[#6B6B6B] absolute left-3 top-3.5 stroke-[1.75]" />
            </div>
          </div>
        </div>

        {formData.serviceType === 'home' ? (
          <div className="space-y-3">
            <div>
              <label className="text-xs font-sans font-medium text-[#6B6B6B] block mb-1">
                HOME COLLECTION ADDRESS *
              </label>
              <textarea
                name="address"
                required
                rows={2}
                value={formData.address}
                onChange={handleChange}
                placeholder="House/Flat No., Building Name, Street Address, Landmark..."
                className="w-full bg-[#FAFAF8] border border-[#E8E4DF] text-sm font-sans px-4 py-2.5 text-[#1A1A1A] focus:outline-none focus:border-[#0F766E] rounded-md"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="text-xs font-sans font-medium text-[#6B6B6B] block mb-1">
                AREA PINCODE *
              </label>
              <input
                type="text"
                name="pincode"
                required
                pattern="[0-9]{6}"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="e.g. 411004"
                className="w-full bg-[#FAFAF8] border border-[#E8E4DF] text-sm font-sans px-4 py-2.5 text-[#1A1A1A] focus:outline-none focus:border-[#0F766E] rounded-md min-h-[44px]"
              />
            </div>
          </div>
        ) : (
          <div>
            <label className="text-xs font-sans font-medium text-[#6B6B6B] block mb-1">
              SELECT DIAGNOSTIC CENTRE *
            </label>
            <div className="relative">
              <select
                name="centre"
                value={formData.centre}
                onChange={handleChange}
                className="w-full bg-[#FAFAF8] border border-[#E8E4DF] text-sm font-sans px-4 py-2.5 pl-10 text-[#1A1A1A] focus:outline-none focus:border-[#0F766E] rounded-md min-h-[44px]"
              >
                {centresList.map((c, idx) => (
                  <option key={idx} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <MapPin className="w-4 h-4 text-[#6B6B6B] absolute left-3 top-3.5 stroke-[1.75]" />
            </div>
          </div>
        )}
      </div>

      <Button
        variant="primary"
        size="lg"
        type="submit"
        className="w-full justify-center mt-4 shadow-sm"
      >
        Confirm Diagnostic Appointment →
      </Button>

      <p className="text-[11px] text-[#6B6B6B] text-center font-sans">
        🔒 NABL Accredited Sample Protocol. Zero hidden charges. Payment after collection.
      </p>
    </form>
  );
}
