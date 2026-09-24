import React, { useState } from 'react';
import { 
  Activity, Shield, Dumbbell, Calendar, HeartPulse, Sparkles, Award, 
  ArrowRight, Check, CheckCircle2, ChevronRight, Clock, MapPin, Phone, 
  Mail, Flame, Compass, Zap, Stethoscope, UserCheck, Plus
} from 'lucide-react';
import { AdminPortalModal } from './AdminPortalModal.tsx';

interface Program {
  id: string;
  name: string;
  category: string;
  tagline: string;
  price: string;
  duration: string;
  protocolHighlights: string[];
  recommendedFor: string;
  image: string;
}

const PROGRAMS: Program[] = [
  {
    id: 'pr1',
    name: 'ACL & Knee Biomechanics Return-to-Sport',
    category: 'ORTHOPEDIC SPORTS',
    tagline: 'Force plate symmetry analysis, quad hypertrophy sequencing, and deceleration agility testing.',
    price: '$185 / session',
    duration: '16–24 Weeks',
    protocolHighlights: ['Vald ForceDecks Asymmetry Mapping', 'Blood Flow Restriction (BFR) Training', 'Eccentric Hamstring Architecture', 'Field Agility Clearance Gate'],
    recommendedFor: 'Competitive soccer, basketball, ski athletes recovering from ACL/meniscus repair.',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pr2',
    name: 'Spine & Lumbar Herniation Decompression',
    category: 'SPINE & POSTURE',
    tagline: 'Traction spinal decompression, deep core stabilization, and directional preference loading.',
    price: '$175 / session',
    duration: '8–12 Weeks',
    protocolHighlights: ['McKenzie Mechanical Diagnosis (MDT)', 'Computerized Traction Table Decompression', 'Pelvic-Ribcage Neutral Alignment', 'Ergonomic Kinetic Load Optimization'],
    recommendedFor: 'Chronic disc bulges, sciatica nerve impingement, and executive postural fatigue.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pr3',
    name: 'Overhead Athlete Shoulder & Rotator Cuff',
    category: 'UPPER EXTREMITY',
    tagline: 'Dynamic scapular stabilization, rotator cuff eccentrics, and high-velocity arm speed loading.',
    price: '$180 / session',
    duration: '10–14 Weeks',
    protocolHighlights: ['Scapulohumeral Rhythm Analysis', 'Integrative Dry Needling & E-Stim', 'Plyometric Rebound Ballistic Training', 'Pitching/Swinging Kinetic Linkage'],
    recommendedFor: 'Tennis players, baseball pitchers, swimmers, and CrossFit overhead lifters.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pr4',
    name: 'Integrative Dry Needling & Myofascial Release',
    category: 'ACUTE PAIN RELIEF',
    tagline: 'Deep intramuscular trigger point needling with micro-current frequency stimulation.',
    price: '$140 / session',
    duration: '4–6 Weeks',
    protocolHighlights: ['Intramuscular Motor Point Stimulation', 'Instrument-Assisted Soft Tissue (IASTM)', 'Autonomic Vagal Nerve Reset', 'Immediate ROM Restoration'],
    recommendedFor: 'Severe muscle spasm, chronic neck stiffness, tension headaches, and myofascial pain.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'
  }
];

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program>(PROGRAMS[0]);
  const [cart, setCart] = useState<Program[]>([]);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const toggleCart = (program: Program) => {
    if (cart.find(p => p.id === program.id)) {
      setCart(cart.filter(p => p.id !== program.id));
    } else {
      setCart([...cart, program]);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setIsBookModalOpen(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#06090e] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Top Banner */}
      <div className="bg-[#090d15] border-b border-cyan-900/30 px-4 py-2 text-center text-xs tracking-wider text-slate-400 flex items-center justify-center space-x-3">
        <span className="flex items-center text-cyan-400 font-mono font-semibold">
          <Zap className="w-3.5 h-3.5 mr-1" />
          KINETIC SPINE & SPORTS PT CLINICAL OS
        </span>
        <span className="hidden sm:inline text-slate-600">•</span>
        <span className="hidden sm:inline">1-on-1 Doctor of Physical Therapy Care (Zero Aides)</span>
        <span className="text-slate-600">•</span>
        <button 
          onClick={() => setIsAdminOpen(true)}
          className="text-cyan-400 hover:text-cyan-300 font-mono text-[11px] underline ml-2 font-semibold"
        >
          [ DPT PORTAL ]
        </button>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-[#06090e]/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center text-black font-extrabold shadow-lg shadow-cyan-500/20">
              <Activity className="w-5 h-5 text-black" />
            </div>
            <div>
              <span className="font-extrabold tracking-wider text-lg text-white font-mono flex items-center gap-1.5">
                KINETIC<span className="text-cyan-400">SPORTS</span>
              </span>
              <p className="text-[10px] tracking-widest text-slate-400 uppercase font-mono">Orthopedic PT & Performance OS</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#programs" className="hover:text-cyan-400 transition-colors">Specialties</a>
            <a href="#technology" className="hover:text-cyan-400 transition-colors">Force Plate Tech</a>
            <a href="#clinicians" className="hover:text-cyan-400 transition-colors">DPT Faculty</a>
            <a href="#insurance" className="hover:text-cyan-400 transition-colors">Insurance</a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsBookModalOpen(true)}
              className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl text-xs tracking-wider transition-all shadow-lg shadow-cyan-500/25 flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK EVALUATION</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4 sm:px-8 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
              <Dumbbell className="w-3.5 h-3.5" />
              <span>BIOMECHANICAL PERFORMANCE & REHABILITATION</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Elite Orthopedic Care. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                Engineered for High Output.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              We eliminated the typical therapy mill model. Every 60-minute session is delivered 1-on-1 by a board-certified Doctor of Physical Therapy, utilizing dual force plates and dry needling to return you to peak sport.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsBookModalOpen(true)}
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl text-sm transition-all shadow-xl shadow-cyan-500/30 flex items-center justify-center space-x-2"
              >
                <span>BOOK INITIAL EVALUATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#programs"
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl text-sm font-semibold text-slate-200 transition-all flex items-center justify-center space-x-2"
              >
                <span>EXPLORE CLINICAL SPECIALTIES</span>
              </a>
            </div>

            {/* Metrics */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-slate-800/80">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">60 Min</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">100% 1-on-1 DPT Care</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">98.4%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Return-to-Sport Rate</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">&lt; 0.5%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Re-Injury Recurrence</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-cyan-500/40 via-slate-800 to-slate-900 shadow-2xl">
              <div className="bg-[#090d15] rounded-2xl p-6 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">FORCE DECK TELEMETRY</span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">VALD LIVE</span>
                </div>

                <div className="space-y-4">
                  <div className="p-3.5 bg-slate-950/80 border border-slate-800/80 rounded-xl">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Bilateral Jump Asymmetry (L vs R)</span>
                      <span className="text-cyan-400 font-mono font-bold">4.2% (Pass Gate: &lt; 10%)</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-sky-400 to-cyan-400 h-full w-[92%]"></div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-950/80 border border-slate-800/80 rounded-xl">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Peak Eccentric Deceleration Force</span>
                      <span className="text-emerald-400 font-mono font-bold">3,850 N (Optimal)</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-teal-400 to-emerald-400 h-full w-[88%]"></div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-950/80 border border-slate-800/80 rounded-xl">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Knee Flexion Range of Motion</span>
                      <span className="text-blue-400 font-mono font-bold">142° (Full Recovery)</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-400 to-indigo-500 h-full w-[96%]"></div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsBookModalOpen(true)}
                    className="w-full py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-mono text-xs rounded-xl transition-all flex items-center justify-center space-x-2"
                  >
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <span>Run Force Plate Baseline Scan</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="programs" className="py-20 px-4 sm:px-8 bg-[#080c14] border-t border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
              CLINICAL SPECIALTIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Targeted Orthopedic Rehabilitation
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Evidence-based orthopedic protocols engineered for athletes, post-surgical patients, and active professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS.map((program) => {
              const isInCart = !!cart.find(p => p.id === program.id);
              return (
                <div 
                  key={program.id}
                  className="bg-[#0a0e18] border border-slate-800 hover:border-cyan-500/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-xl"
                >
                  <div className="h-44 overflow-hidden relative">
                    <img 
                      src={program.image} 
                      alt={program.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e18] via-transparent to-black/40"></div>
                    <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-slate-700/60 px-2.5 py-1 rounded-lg text-[10px] font-mono text-cyan-400 uppercase">
                      {program.category}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                          {program.name}
                        </h3>
                        <span className="font-mono font-bold text-cyan-400 text-sm">{program.price}</span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mt-2">
                        {program.tagline}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Clinical Protocol:</span>
                      <ul className="text-xs space-y-1 text-slate-300">
                        {program.protocolHighlights.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-1.5">
                            <Check className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                      <button
                        onClick={() => toggleCart(program)}
                        className={`flex-1 py-2 px-3 rounded-xl font-mono text-xs font-semibold transition-all flex items-center justify-center space-x-1.5 ${
                          isInCart 
                            ? 'bg-cyan-500 text-black shadow-md' 
                            : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700'
                        }`}
                      >
                        {isInCart ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>ADDED TO REHAB PLAN</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5 text-cyan-400" />
                            <span>SELECT SPECIALTY</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Insurance & Direct Access */}
      <section id="insurance" className="py-20 px-4 sm:px-8 bg-[#06090e]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
              DIRECT ACCESS PROTOCOL
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              No Doctor Referral Needed in California
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Under Direct Access law, you can begin treatment immediately with our licensed Doctors of Physical Therapy for up to 45 days or 12 visits without needing an MD prescription.
            </p>

            <div className="space-y-3">
              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-start space-x-3.5">
                <div className="p-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">PPO Out-of-Network Superbill Submission</h4>
                  <p className="text-xs text-slate-400 mt-1">We handle all itemized ICD-10 and CPT coding for prompt 60-80% PPO insurance reimbursement.</p>
                </div>
              </div>

              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-start space-x-3.5">
                <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">HSA / FSA Card Eligible Payments</h4>
                  <p className="text-xs text-slate-400 mt-1">All evaluation and treatment sessions qualify for 100% tax-free Health Savings Account payments.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#090d15] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-white">Instant Insurance Benefits Check</h3>
            <p className="text-xs text-slate-400">Submit your policy details for automated verification within 60 minutes:</p>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">Insurance Provider</label>
                <select className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:border-cyan-500 outline-none">
                  <option>Blue Cross Blue Shield (PPO)</option>
                  <option>Aetna Choice POS II (PPO)</option>
                  <option>UnitedHealthcare Choice Plus</option>
                  <option>Cigna Open Access Plus</option>
                  <option>Self-Pay / Cash Concierge Rate</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Member ID</label>
                  <input required placeholder="W12345678" className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:border-cyan-500 outline-none" />
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Group Number</label>
                  <input placeholder="GRP-98210" className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:border-cyan-500 outline-none" />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl text-xs tracking-wider transition-all shadow-lg shadow-cyan-500/20"
                >
                  VERIFY MY OUT-OF-NETWORK COVERAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-800 bg-[#05070a] px-4 sm:px-8 py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span className="font-bold text-white font-mono tracking-wider">KINETIC SPINE & SPORTS</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Orthopedic physical therapy and sports performance operating system. Built for modern private practice clinics and athletic facilities.
            </p>
          </div>

          <div>
            <h5 className="font-mono text-white text-xs uppercase tracking-wider mb-3">Rehab Specialties</h5>
            <ul className="space-y-1.5 text-slate-400">
              <li>ACL Return-to-Sport</li>
              <li>Spinal Decompression</li>
              <li>Rotator Cuff & Shoulder</li>
              <li>Dry Needling & E-Stim</li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-white text-xs uppercase tracking-wider mb-3">Clinical Compliance</h5>
            <ul className="space-y-1.5 text-slate-400">
              <li>Direct Access Certified</li>
              <li>HIPAA Secure Encrypted</li>
              <li>Vald ForceDecks Connected</li>
              <li>Supabase Row Level Security</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-mono text-white text-xs uppercase tracking-wider">Clinician Door</h5>
            <p className="text-[11px] text-slate-400">
              Access the clinical appointments roster with the 1-click bypass passkey:
            </p>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 text-cyan-400 font-mono text-xs rounded-xl transition-all"
            >
              DPT Portal (/admin)
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
          <div>© 2026 Kinetic Spine & Sports PT OS. All Rights Reserved. Turnkey Clinical Operating System.</div>
          <div className="mt-2 sm:mt-0 font-mono text-cyan-400">Passkey: pt2026</div>
        </div>
      </footer>

      {/* Modals */}
      <AdminPortalModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

      {/* Evaluation Booking Modal */}
      {isBookModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#090d15] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 text-slate-200 shadow-2xl">
            <button 
              onClick={() => setIsBookModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2"
            >
              ✕
            </button>

            {!bookingSuccess ? (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Book Initial Orthopedic Evaluation</h3>
                    <p className="text-xs text-slate-400">60-minute 1-on-1 diagnostic exam with a DPT</p>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Full Legal Name</label>
                  <input required placeholder="Marcus Vance" className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:border-cyan-500 outline-none" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Email</label>
                    <input required type="email" placeholder="athlete@example.com" className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:border-cyan-500 outline-none" />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Phone</label>
                    <input required type="tel" placeholder="+1 (555) 928-1123" className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:border-cyan-500 outline-none" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Primary Injury / Joint Area</label>
                  <select className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:border-cyan-500 outline-none">
                    <option>Knee / ACL / Meniscus Post-Op</option>
                    <option>Lumbar Spine / Lower Back / Sciatica</option>
                    <option>Shoulder / Rotator Cuff / Labrum</option>
                    <option>Ankle Sprain / Achilles Tendon</option>
                    <option>Cervical Spine / Neck Pain / Tension</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl text-xs tracking-wider transition-all shadow-lg shadow-cyan-500/25 mt-4"
                >
                  CONFIRM EVALUATION APPOINTMENT
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500/50 rounded-full flex items-center justify-center mx-auto text-cyan-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Evaluation Confirmed!</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Your intake packet and intake medical history form have been emailed. We look forward to seeing you in clinic.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
