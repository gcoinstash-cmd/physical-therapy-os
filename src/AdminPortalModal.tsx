import React, { useState } from 'react';
import { Shield, Key, X, Activity, UserCheck, Dumbbell, Calendar, HeartPulse } from 'lucide-react';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({ isOpen, onClose }) => {
  const [passkey, setPasskey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkey === 'pt2026') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid PT Passkey. Hint: Use 1-Click Auto-Fill Demo Passkey.');
    }
  };

  const autofillPasskey = () => {
    setPasskey('pt2026');
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#090d15] border border-cyan-900/50 rounded-2xl p-6 sm:p-8 text-slate-200 shadow-2xl overflow-hidden">
        {/* Cyan backdrop glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-900/60 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isAuthenticated ? (
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-wide">CLINICAL THERAPY OS DOOR</h3>
                <p className="text-base text-zinc-200 leading-relaxed">Kinetic Spine & Sports PT Staff Administration</p>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold font-mono text-cyan-400 uppercase tracking-wider mb-2">
                  DPT Clinician Access Passkey
                </label>
                <div className="relative">
                  <Key className="absolute left-3 top-3.5 w-4 h-4 text-slate-300" />
                  <input
                    type="password"
                    value={passkey}
                    onChange={(e) => setPasskey(e.target.value)}
                    placeholder="Enter passkey..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-900/80 border border-slate-700/60 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                  />
                </div>
              </div>

              {error && (
                <p className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/30 p-2.5 rounded-lg">
                  {error}
                </p>
              )}

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl text-sm transition-all shadow-lg shadow-cyan-500/20 text-center"
                >
                  Verify Access
                </button>
                <button
                  type="button"
                  onClick={autofillPasskey}
                  className="py-3 px-4 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/30 text-cyan-300 font-mono text-base font-semibold min-h-[44px] rounded-xl transition-all"
                >
                  ⚡ Auto-Fill: pt2026
                </button>
              </div>
            </form>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-semibold text-slate-300 flex items-center justify-between">
              <span>Security Level: HIPAA Encrypted Tier-3</span>
              <span className="font-mono text-cyan-400">Auth Gate Active</span>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-cyan-500/20 border border-cyan-500/40 rounded-xl text-cyan-400">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Live Orthopedic & Rehab Roster</h4>
                  <p className="text-base text-zinc-200 leading-relaxed">Daily Patient Volume, ROM Telemetry & Scheduling</p>
                </div>
              </div>
              <span className="px-2.5 py-1 text-xs font-semibold tracking-wider font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                ACTIVE
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>Sessions Today</span>
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-white font-mono">38</div>
                <div className="text-xs font-semibold tracking-wider text-cyan-400 mt-1">4 Open Table Slots</div>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>Active Rehab Plans</span>
                  <Dumbbell className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-2xl font-bold text-white font-mono">114</div>
                <div className="text-xs font-semibold tracking-wider text-emerald-400 mt-1">ACL, Lumbar, Rotator</div>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>Avg ROM Recovery</span>
                  <HeartPulse className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white font-mono">+42°</div>
                <div className="text-xs font-semibold tracking-wider text-blue-400 mt-1">Surpasses Norm by 18%</div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
              <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Live Treatment Floor Queue</h5>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 bg-slate-950/60 rounded-lg border border-slate-800/80">
                  <div>
                    <span className="font-semibold text-white">Marcus Vance (Bay Area FC)</span>
                    <span className="text-slate-400 ml-2">ACL Post-Op Phase 3 // Dr. Chen DPT</span>
                  </div>
                  <span className="text-cyan-400 font-mono text-xs font-semibold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">ON TABLE 2</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-slate-950/60 rounded-lg border border-slate-800/80">
                  <div>
                    <span className="font-semibold text-white">Claire Sterling</span>
                    <span className="text-slate-400 ml-2">Cervical Spine Decompression // Dr. Rivera DPT</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-xs font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">READY</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-slate-950/60 rounded-lg border border-slate-800/80">
                  <div>
                    <span className="font-semibold text-white">Julian Ramos</span>
                    <span className="text-slate-400 ml-2">Shoulder Impingement Dry Needling</span>
                  </div>
                  <span className="text-amber-400 font-mono text-xs font-semibold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">CHECK-IN</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                Log Out
              </button>
              <div className="flex gap-2">
                <button
                  onClick={onClose}
                  className="px-5 py-3 min-h-[44px] bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl text-base font-semibold min-h-[44px] transition-all shadow-md"
                >
                  Close Console
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
