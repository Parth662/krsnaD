import React from 'react';

export default function NetworkGraphic({ className = '' }) {
  const nodes = [
    { id: 'HUB-PUNE', label: 'Pune Central Hub', status: 'ACTIVE', ping: '9ms', top: '15%', left: '75%' },
    { id: 'HUB-BOM', label: 'Mumbai Tele-Rad', status: 'ONLINE', ping: '11ms', top: '48%', left: '85%' },
    { id: 'HUB-DEL', label: 'Delhi NCR LIMS', status: 'ACTIVE', ping: '8ms', top: '78%', left: '60%' },
    { id: 'HUB-BLR', label: 'Bengaluru Bio-Lab', status: 'ACTIVE', ping: '14ms', top: '35%', left: '42%' },
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Editorial Grid Lines */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      {/* SVG Connecting Telemetry Lines */}
      <svg className="absolute inset-0 w-full h-full stroke-slate-300/60" strokeDasharray="4 4" fill="none">
        <path d="M 100 120 L 450 120 L 750 220 L 950 480 L 600 780" stroke="#0052CC" strokeWidth="1.5" strokeOpacity="0.4" />
        <path d="M 250 350 L 750 220 L 850 480" stroke="#0D9488" strokeWidth="1.5" strokeOpacity="0.4" />
      </svg>

      {/* Pulsing Regional Network Nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
          style={{ top: node.top, left: node.left }}
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute w-5 h-5 rounded-full bg-[#0052CC]/20 animate-ping"></span>
            <div className="w-2.5 h-2.5 rounded-full bg-[#0052CC] border border-white"></div>
          </div>

          <div className="mt-1 bg-white/90 backdrop-blur-xs border border-slate-200 px-2.5 py-1 text-[10px] font-mono text-slate-700 shadow-xs whitespace-nowrap">
            <div className="flex items-center gap-1.5 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>{node.label}</span>
              <span className="text-slate-400">({node.ping})</span>
            </div>
          </div>
        </div>
      ))}

      {/* Embedded Technical Data Badge Overlay (Top Right) */}
      <div className="absolute top-8 right-8 hidden lg:block bg-white border border-slate-200 p-3 text-[11px] font-mono text-slate-600 shadow-xs space-y-1">
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-1">
          <span className="font-bold text-[#0052CC]">[LIMS_TELEMETRY]</span>
          <span className="text-emerald-600 font-semibold">ONLINE</span>
        </div>
        <div className="text-[10px] text-slate-500">ISO 15189:2022 PROTOCOL</div>
        <div className="text-[10px] text-slate-400">REF_HASH: 0x90A21B8F</div>
      </div>
    </div>
  );
}
