import React from 'react';
import { Flag, X } from 'lucide-react';

const SurrenderModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 border-2 border-slate-800 rounded-xl p-6 max-w-sm w-full shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-rose-500/20 rounded-lg flex items-center justify-center">
            <Flag size={24} className="text-rose-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Surrender?</h3>
            <p className="text-sm text-slate-400">Are you sure you want to give up?</p>
          </div>
        </div>

        <p className="text-slate-300 text-sm mb-6">
          You will receive gold based on your current progress.
        </p>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2"
          >
            <X size={18} />
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2"
          >
            <Flag size={18} />
            Surrender
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurrenderModal;
