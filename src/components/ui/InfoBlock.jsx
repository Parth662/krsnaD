import React from 'react';
import Badge from './Badge';
import Button from './Button';
import { Activity, CheckCircle2 } from 'lucide-react';

export default function InfoBlock({
  index = '01',
  category = 'NETWORK INFRASTRUCTURE',
  title = 'Automated High-Throughput Diagnostic Processing',
  description = 'Krsnaa operates an integrated diagnostic ecosystem with standardized ISO 15189 protocol validation, real-time sample tracing, and multi-tier quality assurance across 450+ hub and spoke locations.',
  features = [
    'NABL & ISO 15189 Accredited Laboratory Workflows',
    'Sub-2 Hour STAT Emergency Processing Capability',
    'Centralized LIMS Cloud Integration & Instant API Access',
  ],
  actionLabel = 'Explore Network Architecture',
  onActionClick,
  className = '',
}) {
  return (
    <div className={`bg-white border border-slate-200 overflow-hidden ${className}`}>
      {/* Top Header Rail */}
      <div className="flex items-center justify-between px-6 py-3 bg-slate-50 border-b border-slate-200 text-xs font-mono text-slate-500">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#0052CC]">[{index}]</span>
          <span className="tracking-wider uppercase font-medium text-slate-600">{category}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-slate-400 hidden sm:inline">STATUS: ONLINE</span>
        </div>
      </div>

      {/* Main Split Body */}
      <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Title & Category Badge */}
        <div className="lg:col-span-7 space-y-4">
          <Badge variant="primary">PRECISION ENGINE</Badge>

          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#0B132B] leading-tight tracking-tight">
            {title}
          </h3>

          <p className="text-slate-600 text-base leading-relaxed font-sans">
            {description}
          </p>

          <div className="pt-2">
            <Button variant="primary" showArrow onClick={onActionClick}>
              {actionLabel}
            </Button>
          </div>
        </div>

        {/* Right Column: Key Technical Specs Rail */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-6 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider pb-3 border-b border-slate-200">
            <Activity className="w-4 h-4 text-[#0052CC]" />
            <span>OPERATIONAL SPECIFICATIONS</span>
          </div>

          <ul className="space-y-3 text-sm text-slate-700">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
