import React, { useState } from 'react';
import { Scale, Clock, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
import { MaxDailyDosageInfo } from '../types';

interface MaxDosageCardProps {
  dosageInfo?: MaxDailyDosageInfo;
  className?: string;
}

export const MaxDosageCard: React.FC<MaxDosageCardProps> = ({ dosageInfo, className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!dosageInfo) return null;

  const generalMax = typeof dosageInfo === 'string' 
    ? dosageInfo 
    : (dosageInfo.generalMax || "Consultez la notice médicale");

  const byIndication = Array.isArray(dosageInfo.byIndication) ? dosageInfo.byIndication : [];
  const safetyWarning = typeof dosageInfo === 'object' ? dosageInfo.safetyWarning : undefined;

  const hasIndications = byIndication.length > 0;

  return (
    <div className={`p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all duration-300 ${className}`}>
      
      {/* Ligne principale simplifiée et non redondante */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-slate-900 text-white shadow-xs shrink-0">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
              Dosage maximum
            </span>
            <div className="text-lg font-bold text-slate-900 tracking-tight flex items-baseline gap-2">
              <span>{generalMax}</span>
              <span className="text-xs font-normal text-slate-400">/ 24h</span>
            </div>
          </div>
        </div>

        {/* Bouton dépliant épuré style pilule médicale */}
        {hasIndications && (
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="self-start sm:self-center inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100/80 hover:bg-slate-200/80 transition-all border border-slate-200/70"
          >
            <span>Détail par indication</span>
            <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold flex items-center justify-center">
              {byIndication.length}
            </span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5 ml-0.5 text-slate-500" /> : <ChevronDown className="w-3.5 h-3.5 ml-0.5 text-slate-500" />}
          </button>
        )}
      </div>

      {/* Contenu dépliable sans fond orange criard : design médical clinique moderne */}
      {hasIndications && isExpanded && (
        <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-2.5 animate-fade-in">
          {byIndication.map((item, idx) => (
            <div 
              key={idx} 
              className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/70 flex flex-col gap-1.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-sm font-semibold text-slate-800">
                  {item.indication}
                </span>
                <span className="self-start sm:self-auto px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-900 font-bold text-xs shadow-2xs">
                  {item.maxDaily}
                </span>
              </div>

              {item.frequencyOrInterval && (
                <div className="flex items-start gap-1.5 text-xs text-slate-600">
                  <Clock className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-slate-700 font-medium">Intervalle : </strong>
                    {item.frequencyOrInterval}
                  </span>
                </div>
              )}

              {item.notes && (
                <p className="text-xs text-slate-500 bg-white/80 p-2 rounded-lg border border-slate-200/50 leading-relaxed mt-0.5">
                  {item.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Avertissement discret et lisible */}
      <div className="mt-3 pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-500 leading-relaxed">
        <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
        <span>
          {safetyWarning || "Respectez impérativement l'intervalle entre chaque prise pour éviter tout surdosage."}
        </span>
      </div>

    </div>
  );
};
