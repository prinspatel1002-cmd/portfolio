import React, { useState } from 'react';
import { X, Film, CheckCircle2, CreditCard, Ticket } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const SeatPickerModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>(['B3', 'B4']);
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  if (!isOpen) return null;

  const rows = ['A', 'B', 'C', 'D'];
  const cols = [1, 2, 3, 4, 5, 6, 7, 8];
  const occupied = ['A2', 'A3', 'C5', 'C6', 'D1'];

  const toggleSeat = (id: string) => {
    if (occupied.includes(id)) return;
    if (selectedSeats.includes(id)) {
      setSelectedSeats(selectedSeats.filter(s => s !== id));
    } else {
      setSelectedSeats([...selectedSeats, id]);
    }
  };

  const pricePerSeat = 280; // ₹280 INR
  const total = selectedSeats.length * pricePerSeat;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0e121e] border border-purple-500/30 rounded-2xl shadow-2xl p-6 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
            <Film className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              Flutter Movie Ticket Booking
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Cross-Platform Simulator
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Interactive seating grid powered by Flutter & Firebase Firestore State Management
            </p>
          </div>
        </div>

        {/* Movie Info */}
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 mb-6">
          <div>
            <div className="text-sm font-bold text-white">Interstellar (IMAX 70mm Experience)</div>
            <div className="text-xs text-slate-400">Nexus Mall Screen 2 • 07:45 PM • English 3D</div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/30">
            Dolby Atmos
          </span>
        </div>

        {/* Curved Screen Banner */}
        <div className="text-center mb-8">
          <div className="w-3/4 mx-auto h-2 bg-gradient-to-r from-purple-500/20 via-purple-400 to-purple-500/20 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] mb-2" />
          <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Cinema Screen This Way</span>
        </div>

        {/* Seat Matrix */}
        <div className="space-y-3 mb-6 flex flex-col items-center">
          {rows.map((row) => (
            <div key={row} className="flex items-center gap-2">
              <span className="w-5 text-xs font-mono font-bold text-slate-500 text-center">{row}</span>
              <div className="flex gap-2">
                {cols.map((col) => {
                  const seatId = `${row}${col}`;
                  const isOccupied = occupied.includes(seatId);
                  const isSelected = selectedSeats.includes(seatId);

                  return (
                    <button
                      key={seatId}
                      disabled={isOccupied}
                      onClick={() => toggleSeat(seatId)}
                      className={`w-7 h-7 rounded-lg text-[10px] font-semibold transition flex items-center justify-center ${
                        isOccupied
                          ? 'bg-slate-800/40 text-slate-600 cursor-not-allowed border border-slate-800/40'
                          : isSelected
                          ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/40 scale-105 border border-purple-400'
                          : 'bg-slate-900 border border-slate-700/80 text-slate-300 hover:border-purple-400 hover:bg-slate-800'
                      }`}
                    >
                      {col}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Seat Legend */}
        <div className="flex justify-center items-center gap-6 text-[11px] text-slate-400 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded bg-slate-900 border border-slate-700" />
            <span>Available (₹280)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded bg-purple-600 border border-purple-400" />
            <span>Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded bg-slate-800/40 border border-slate-800/40" />
            <span>Occupied</span>
          </div>
        </div>

        {/* Checkout Bar */}
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400">
              Selected: <span className="text-white font-mono font-bold">{selectedSeats.join(', ') || 'None'}</span>
            </div>
            <div className="text-lg font-extrabold text-white font-mono mt-0.5">
              ₹ {total} <span className="text-xs text-slate-400 font-sans">(Incl. Taxes)</span>
            </div>
          </div>

          <button
            disabled={selectedSeats.length === 0}
            onClick={() => setBookingConfirmed(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-xs shadow-lg hover:brightness-110 disabled:opacity-50 transition"
          >
            <Ticket className="w-4 h-4" />
            {bookingConfirmed ? 'Seats Booked!' : 'Confirm Booking'}
          </button>
        </div>

        {bookingConfirmed && (
          <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
            <span>Mock ticket confirmed! Synced with Firebase Cloud Realtime DB in &lt;100ms.</span>
          </div>
        )}
      </div>
    </div>
  );
};
