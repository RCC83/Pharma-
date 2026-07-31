export interface MedicationInfo {
  name: string;
  description: string;
  indications: string[]; // Soulagement / Ce que ça traite
  contraindications: string[]; // Quand ne pas le prendre
  interactions: string[]; // Interactions (alcool, autres meds)
  alternatives: string[]; // Médicaments alternatifs
  warningLevel: 'low' | 'medium' | 'high'; // Niveau d'alerte général
  usageTips: string; // Conseils d'utilisation brefs
}

export interface SearchState {
  query: string;
  loading: boolean;
  error: string | null;
  data: MedicationInfo | null;
}