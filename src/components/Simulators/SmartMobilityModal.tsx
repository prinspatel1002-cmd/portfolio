import React, { useState } from 'react';
import { X, Navigation, AlertTriangle, ShieldCheck, Bus, MapPin, Zap, RefreshCw } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const SmartMobilityModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [safetyMode, setSafetyMode] = useState<boolean>(true);
  const [incidentReported, setIncidentReported] = useState<boolean>(false);
  const [selectedRoute, setSelectedRoute] = useState<string>('BRTS_CORRIDOR_1');

  if (!isOpen) return null;

  const routes = [
    {
      id: 'BRTS_CORRIDOR_1',
      name: 'BRTS Corridor 1: RTO to Maninagar',
      currentEta: incidentReported ? '24 mins (+11m delay)' : '13 mins (On Time)',
      status: incidentReported ? 'Overcrowded / Delayed' : 'Normal Flow',
      occupancy: incidentReported ? 94 : 62,
      busId: 'GJ-01-BX-4921',
      safetyStatus: 'Live CCTV & Geofence Active'
    },
    {
      id: 'METRO_LINE_1',
      name: 'Ahmedabad Metro: Thaltej to Vastral Gam',
      currentEta: '4 mins (Every 8m frequency)',
      status: 'Optimal Flow',
      occupancy: 48,
      busId: 'METRO-RAIL-08',
      safetyStatus: 'Emergency Button Active'
    },
    {
      id: 'SG_HIGHWAY_EXPRESS',
      name: 'SG Highway Multi-modal Feeder: Vaishnodevi to Sarkhej',
      currentEta: incidentReported ? '32 mins (+16m delay)' : '18 mins',
      status: incidentReported ? 'Traffic Rerouted' : 'Smooth Transit',
      occupancy: incidentReported ? 88 : 71,
      busId: 'AMTS-ELECTRIC-104',
      safetyStatus: 'Night Patrol Linked'
    }
  ];

  const currentRoute = routes.find(r => r.id === selectedRoute) || routes[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#09101d] border border-emerald-500/30 rounded-2xl shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <Bus className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              Smart City Mobility & Safety Platform
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Ahmedabad Command Center
              </span>
            </h3>
            <p className="text-sm text-slate-400">
              Unified transit telemetry, AI crowd forecasting, and geofenced passenger safety
            </p>
          </div>
        </div>

        {/* Interactive Controls */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setIncidentReported(!incidentReported)}
            className={`flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl transition ${
              incidentReported
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-lg shadow-rose-500/10'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700'
            }`}
          >
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            {incidentReported ? 'Incident Active (Congestion Triggered)' : 'Simulate Route Disruption'}
          </button>

          <button
            onClick={() => setSafetyMode(!safetyMode)}
            className={`flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl transition ${
              safetyMode
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            {safetyMode ? 'Night Safety Geofence: Enabled' : 'Night Safety: Idle'}
          </button>
        </div>

        {/* Route Selector */}
        <div className="mb-4">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
            Select Active Transit Corridor:
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {routes.map((r) => (
              <button
                key={r.id}
                onClick={() => setSelectedRoute(r.id)}
                className={`p-3 text-left rounded-xl text-xs border transition ${
                  selectedRoute === r.id
                    ? 'bg-emerald-950/40 border-emerald-500 text-white shadow-md'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800'
                }`}
              >
                <div className="font-semibold truncate">{r.name.split(':')[0]}</div>
                <div className="text-[11px] text-slate-400 mt-1 truncate">{r.currentEta}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Live Corridor Status Card */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 mb-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-bold text-white">{currentRoute.name}</span>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
              {currentRoute.busId}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 rounded-xl bg-slate-800/50">
              <div className="text-[11px] uppercase tracking-wider text-slate-400">Estimated ETA</div>
              <div className="text-lg font-bold text-emerald-400 mt-1">{currentRoute.currentEta.split(' ')[0]} {currentRoute.currentEta.split(' ')[1]}</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/50">
              <div className="text-[11px] uppercase tracking-wider text-slate-400">Congestion Level</div>
              <div className={`text-lg font-bold mt-1 ${incidentReported ? 'text-rose-400' : 'text-cyan-400'}`}>
                {currentRoute.status.split('/')[0]}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/50">
              <div className="text-[11px] uppercase tracking-wider text-slate-400">Bus Occupancy</div>
              <div className="text-lg font-bold text-purple-400 mt-1">{currentRoute.occupancy}% Full</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/50">
              <div className="text-[11px] uppercase tracking-wider text-slate-400">Emergency Dispatch</div>
              <div className="text-lg font-bold text-emerald-300 mt-1">Ready (&lt;3m)</div>
            </div>
          </div>

          {/* Occupancy Progress Bar */}
          <div className="mt-5">
            <div className="flex justify-between text-xs text-slate-400 mb-1.5">
              <span>Passenger Density Forecasting</span>
              <span className="font-semibold text-slate-200">{currentRoute.occupancy}% Capacity</span>
            </div>
            <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 rounded-full ${
                  currentRoute.occupancy > 85
                    ? 'bg-gradient-to-r from-amber-500 to-rose-500'
                    : 'bg-gradient-to-r from-cyan-500 to-emerald-500'
                }`}
                style={{ width: `${currentRoute.occupancy}%` }}
              />
            </div>
          </div>
        </div>

        {/* AI Multimodal Architecture Summary */}
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 space-y-1.5">
          <div className="flex items-center gap-2 text-slate-200 font-semibold mb-1">
            <Zap className="w-4 h-4 text-emerald-400" />
            Four-Layer Multimodal Architecture
          </div>
          <p>• Ingests telemetry across Public Buses (AMTS/BRTS), Metro Rail, Ride-Share, and Traffic sensors.</p>
          <p>• LLM-assisted conversational travel queries and dynamic emergency route reassignment during disruptions.</p>
        </div>
      </div>
    </div>
  );
};
