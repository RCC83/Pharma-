import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionCardProps {
  title: string;
  items: string[];
  icon: LucideIcon;
  variant: 'default' | 'danger' | 'warning' | 'success';
  className?: string;
}

export const SectionCard: React.FC<SectionCardProps> = ({ title, items, icon: Icon, variant, className = '' }) => {
  const getColors = () => {
    switch (variant) {
      case 'danger': return 'bg-red-50 border-red-100 text-red-900 icon-red-600';
      case 'warning': return 'bg-orange-50 border-orange-100 text-orange-900 icon-orange-600';
      case 'success': return 'bg-emerald-50 border-emerald-100 text-emerald-900 icon-emerald-600';
      default: return 'bg-white border-slate-100 text-slate-800 icon-blue-600';
    }
  };

  const colors = getColors();
  const iconColor = colors.split(' ').find(c => c.startsWith('icon-'))?.replace('icon-', 'text-') || 'text-slate-600';

  return (
    <div className={`p-5 rounded-2xl border ${colors.split(' ').slice(0, 2).join(' ')} shadow-sm transition-all duration-300 ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 rounded-lg bg-white/80 shadow-sm ${iconColor}`}>
          <Icon className="w-5 h-5" />
        </div>
        <h3 className={`text-base font-bold tracking-tight ${colors.split(' ')[2]}`}>{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.length > 0 ? (
          items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-slate-700 text-sm">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${iconColor.replace('text', 'bg')}`} />
              <span className="leading-snug">{item}</span>
            </li>
          ))
        ) : (
          <li className="text-slate-400 italic text-xs">Aucune donnée spécifique listée.</li>
        )}
      </ul>
    </div>
  );
};
