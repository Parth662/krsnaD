import React from 'react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import StatBlock from '../components/ui/StatBlock';
import InfoBlock from '../components/ui/InfoBlock';
import { 
  ShieldCheck, 
  Activity, 
  Cpu, 
  CheckCircle, 
  ArrowUpRight, 
  Layers, 
  Sliders, 
  Terminal 
} from 'lucide-react';

export default function DesignSystemPreview() {
  return (
    <div className="min-h-screen bg-[#F9F9FB] text-[#0B132B] font-sans pb-24">
      {/* Top System Bar */}
      <header className="bg-[#0B132B] text-white border-b border-slate-800">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-[#0052CC] flex items-center justify-center font-bold text-white text-xs tracking-tighter">
                KD
              </div>
              <div>
                <span className="font-display font-bold text-base tracking-tight block">KRSNAA DIAGNOSTICS</span>
                <span className="font-mono text-xs text-slate-400">DESIGN SYSTEM FOUNDATION — V1.0</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="teal">SYSTEM STATUS: ACTIVE</Badge>
              <Badge variant="dark">CONCEPT: PRECISION NETWORK</Badge>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero Intro Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <Container>
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#0052CC] uppercase tracking-widest font-semibold">
              <Terminal className="w-4 h-4" />
              <span>Foundation Specification / Visual Guidelines</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B132B] tracking-tight leading-[1.1]">
              Precision Diagnostic Network Design System
            </h1>

            <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed">
              A restrained, clinical design language engineered for accuracy, technical authority, and seamless healthcare accessibility across India's largest diagnostic network.
            </p>
          </div>
        </Container>
      </section>

      {/* Content Container */}
      <Container className="py-12 space-y-16">
        {/* SECTION 1: TYPOGRAPHY HIERARCHY */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-300">
            <h2 className="font-display text-xl font-bold uppercase tracking-wider text-[#0B132B] flex items-center gap-2">
              <span className="text-[#0052CC] font-mono">[01]</span> TYPOGRAPHY SYSTEM
            </h2>
            <span className="font-mono text-xs text-slate-400">Plus Jakarta Sans & Inter</span>
          </div>

          <div className="bg-white border border-slate-200 divide-y divide-slate-200">
            {/* Primary Heading H1 */}
            <div className="p-6 sm:p-8 space-y-2">
              <div className="flex justify-between text-xs font-mono text-slate-400">
                <span>DISPLAY HEADLINE H1 (60px / Bold / -0.025em)</span>
                <span>Font: Plus Jakarta Sans</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B132B] tracking-tight leading-none">
                Advanced Clinical Diagnostics at Scale
              </h1>
            </div>

            {/* Secondary Heading H2 */}
            <div className="p-6 sm:p-8 space-y-2">
              <div className="flex justify-between text-xs font-mono text-slate-400">
                <span>SECTION HEADLINE H2 (36px / SemiBold)</span>
                <span>Font: Plus Jakarta Sans</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0B132B] tracking-tight">
                Integrated Pathological & Radiologic Intelligence Network
              </h2>
            </div>

            {/* Subheading H3 */}
            <div className="p-6 sm:p-8 space-y-2">
              <div className="flex justify-between text-xs font-mono text-slate-400">
                <span>SUBSECTION HEADLINE H3 (24px / Medium)</span>
                <span>Font: Plus Jakarta Sans</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-medium text-[#0B132B]">
                Sub-2 Hour STAT Emergency Processing Capability
              </h3>
            </div>

            {/* Body Text */}
            <div className="p-6 sm:p-8 space-y-2">
              <div className="flex justify-between text-xs font-mono text-slate-400">
                <span>BODY COPY (16px / Regular / 1.625 Line Height)</span>
                <span>Font: Inter</span>
              </div>
              <p className="text-slate-600 text-base max-w-3xl leading-relaxed">
                Krsnaa Diagnostics combines state-of-the-art diagnostic imaging and pathology laboratories with a nationwide digital network. Every sample is validated through standardized ISO 15189 quality control protocols, ensuring unmatched precision, rapid turnaround, and affordable clinical access.
              </p>
            </div>

            {/* Technical Monospace */}
            <div className="p-6 sm:p-8 space-y-2 bg-slate-50">
              <div className="flex justify-between text-xs font-mono text-slate-400">
                <span>TECHNICAL METADATA & ACCREDITATION TAGS</span>
                <span>Font: JetBrains Mono</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                <Badge variant="dark">[LIMS PROTOCOL v4.2]</Badge>
                <Badge variant="primary">[NABL ACCREDITED: MC-2940]</Badge>
                <Badge variant="teal">[PRECISION RATIO: 99.8%]</Badge>
                <Badge variant="neutral">[SAMPLE_ID: #KD-90821-X]</Badge>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 2: COLOR PALETTE & TOKENS */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-300">
            <h2 className="font-display text-xl font-bold uppercase tracking-wider text-[#0B132B] flex items-center gap-2">
              <span className="text-[#0052CC] font-mono">[02]</span> RESTRAINED COLOR PALETTE
            </h2>
            <span className="font-mono text-xs text-slate-400">Medical Clinical Palette</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Canvas / Background */}
            <div className="bg-white border border-slate-200 p-5 space-y-3">
              <div className="h-16 w-full bg-[#F9F9FB] border border-slate-300"></div>
              <div>
                <span className="font-display font-semibold text-sm block">Warm Canvas</span>
                <span className="font-mono text-xs text-slate-400">#F9F9FB</span>
                <p className="text-xs text-slate-500 mt-1">Background surface</p>
              </div>
            </div>

            {/* Deep Ink */}
            <div className="bg-white border border-slate-200 p-5 space-y-3">
              <div className="h-16 w-full bg-[#0B132B]"></div>
              <div>
                <span className="font-display font-semibold text-sm block">Deep Ink</span>
                <span className="font-mono text-xs text-slate-400">#0B132B</span>
                <p className="text-xs text-slate-500 mt-1">Primary typography</p>
              </div>
            </div>

            {/* Medical Blue */}
            <div className="bg-white border border-slate-200 p-5 space-y-3">
              <div className="h-16 w-full bg-[#0052CC]"></div>
              <div>
                <span className="font-display font-semibold text-sm block">Medical Blue</span>
                <span className="font-mono text-xs text-slate-400">#0052CC</span>
                <p className="text-xs text-slate-500 mt-1">Brand main accent</p>
              </div>
            </div>

            {/* Clinical Teal */}
            <div className="bg-white border border-slate-200 p-5 space-y-3">
              <div className="h-16 w-full bg-[#0D9488]"></div>
              <div>
                <span className="font-display font-semibold text-sm block">Clinical Teal</span>
                <span className="font-mono text-xs text-slate-400">#0D9488</span>
                <p className="text-xs text-slate-500 mt-1">Technical highlights</p>
              </div>
            </div>

            {/* Slate Gray */}
            <div className="bg-white border border-slate-200 p-5 space-y-3">
              <div className="h-16 w-full bg-[#475569]"></div>
              <div>
                <span className="font-display font-semibold text-sm block">Slate Slate</span>
                <span className="font-mono text-xs text-slate-400">#475569</span>
                <p className="text-xs text-slate-500 mt-1">Secondary details</p>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 3: BUTTONS & INTERACTION STATES */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-300">
            <h2 className="font-display text-xl font-bold uppercase tracking-wider text-[#0B132B] flex items-center gap-2">
              <span className="text-[#0052CC] font-mono">[03]</span> BUTTONS & INTERACTIVE ELEMENTS
            </h2>
            <span className="font-mono text-xs text-slate-400">State Matrix</span>
          </div>

          <div className="bg-white border border-slate-200 p-6 sm:p-8 space-y-8">
            {/* Standard Button Variants */}
            <div className="space-y-3">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">BUTTON VARIANTS</span>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" showArrow>
                  Primary Action
                </Button>

                <Button variant="secondary">
                  Secondary Action
                </Button>

                <Button variant="dark">
                  Dark Accent
                </Button>

                <Button variant="ghost">
                  Ghost Action
                </Button>

                <Button variant="primary" disabled>
                  Disabled State
                </Button>
              </div>
            </div>

            {/* Editorial Link States */}
            <div className="space-y-3 pt-6 border-t border-slate-200">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">TECHNICAL & EDITORIAL LINKS</span>
              <div className="flex flex-wrap items-center gap-8 text-sm">
                <a href="#test" className="text-[#0052CC] font-semibold hover:underline inline-flex items-center gap-1 group">
                  <span>View Lab Test Directory</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <a href="#locations" className="text-[#0B132B] font-medium hover:text-[#0052CC] inline-flex items-center gap-1">
                  <span>Find Diagnostic Center Near You</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>

                <span className="font-mono text-xs text-slate-500 bg-slate-100 px-3 py-1 border border-slate-200">
                  REF_ID: 1049-PRECISION
                </span>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 4: PRECISION STATISTICS COMPONENT */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-300">
            <h2 className="font-display text-xl font-bold uppercase tracking-wider text-[#0B132B] flex items-center gap-2">
              <span className="text-[#0052CC] font-mono">[04]</span> STATISTICS & METRIC INDICATORS
            </h2>
            <span className="font-mono text-xs text-slate-400">Structured Data Rail</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatBlock
              value="12.5M+"
              unit="ANNUAL TESTS"
              label="Diagnostic Procedures Processed"
              description="High-volume accurate pathological & radiological reporting across India."
              badgeText="NABL CERTIFIED"
              accentColor="blue"
            />

            <StatBlock
              value="450+"
              unit="NETWORK CENTERS"
              label="Hub & Spoke Network"
              description="Standardized diagnostic centers providing accessible healthcare."
              badgeText="PAN-INDIA REACH"
              accentColor="teal"
            />

            <StatBlock
              value="99.8%"
              unit="PRECISION ACCURACY"
              label="Quality Control Compliance"
              description="Continuous automated verification against ISO 15189 standards."
              badgeText="ISO 15189:2022"
              accentColor="slate"
            />
          </div>
        </section>


        {/* SECTION 5: EXAMPLE MODULAR INFORMATION BLOCK */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-300">
            <h2 className="font-display text-xl font-bold uppercase tracking-wider text-[#0B132B] flex items-center gap-2">
              <span className="text-[#0052CC] font-mono">[05]</span> MODULAR EDITORIAL INFORMATION BLOCK
            </h2>
            <span className="font-mono text-xs text-slate-400">Split Asymmetrical Architecture</span>
          </div>

          <InfoBlock
            index="01"
            category="TECHNOLOGY FOUNDATION"
            title="Integrated Diagnostic Intelligence & Tele-Radiology Engine"
            description="Our centralized infrastructure connects digital X-Ray, CT, MRI, and molecular pathology labs directly to expert sub-specialist radiologists and pathologists in real time."
            features={[
              '24/7 Centralized Tele-Radiology Reporting Engine',
              'Barcoded Specimen Tracking with Zero Human Mix-up Risk',
              'Seamless EHR API Integration for Hospitals & Patients',
            ]}
            actionLabel="View Technical Specifications"
          />
        </section>


        {/* SECTION 6: BORDER & SPACING MATRIX */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-300">
            <h2 className="font-display text-xl font-bold uppercase tracking-wider text-[#0B132B] flex items-center gap-2">
              <span className="text-[#0052CC] font-mono">[06]</span> BORDER & SPACING RHYTHM
            </h2>
            <span className="font-mono text-xs text-slate-400">Hairline Grid System</span>
          </div>

          <div className="bg-white border border-slate-200 p-8 grid grid-cols-1 md:grid-cols-2 gap-8 grid-pattern">
            <div className="bg-white p-6 border border-slate-300 shadow-2xs space-y-2">
              <span className="font-mono text-xs text-[#0052CC] uppercase tracking-wider font-semibold">HAIRLINE BORDER SPEC</span>
              <p className="text-slate-700 text-sm">
                Borders use precise 1px hairline rules (<code className="font-mono text-xs bg-slate-100 px-1 py-0.5">#E2E8F0</code>) without heavy fuzzy shadows. Layout relies on generous whitespace and mathematical grid rhythm.
              </p>
            </div>

            <div className="bg-white p-6 border border-slate-300 shadow-2xs space-y-2">
              <span className="font-mono text-xs text-[#0D9488] uppercase tracking-wider font-semibold">RESPONSIVE BREAKPOINTS</span>
              <p className="text-slate-700 text-sm">
                Breakpoints follow: Mobile (<code className="font-mono text-xs bg-slate-100 px-1 py-0.5">&lt;640px</code>), Tablet (<code className="font-mono text-xs bg-slate-100 px-1 py-0.5">640px–1024px</code>), Desktop (<code className="font-mono text-xs bg-slate-100 px-1 py-0.5">1024px+</code>), Large Desktop (<code className="font-mono text-xs bg-slate-100 px-1 py-0.5">1280px+</code>).
              </p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
