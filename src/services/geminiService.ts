import { GoogleGenAI, Type } from "@google/genai";
import { MedicationInfo } from "../types";

let aiInstance: GoogleGenAI | null = null;

const getAI = () => {
  if (!aiInstance) {
    // On essaie d'abord process.env.GEMINI_API_KEY (injecté par la plateforme)
    let apiKey = process.env.GEMINI_API_KEY;
    
    // Fallback sur import.meta.env si process.env est vide ou undefined
    if (!apiKey || apiKey === "undefined" || apiKey === "") {
      apiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY;
    }
    
    if (!apiKey || apiKey === "undefined" || apiKey === "") {
      throw new Error("Clé API Gemini non configurée. Veuillez rafraîchir la page ou vérifier vos paramètres.");
    }
    
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
};

const medicationSchema = {
  type: Type.OBJECT,
  properties: {
    name: { type: Type.STRING, description: "Nom officiel du médicament" },
    description: { type: Type.STRING, description: "Brève description pharmacologique" },
    indications: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "Liste des symptômes ou maladies traités (Soulagement)"
    },
    contraindications: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "Situations où le médicament est interdit (ex: grossesse, allergie)"
    },
    interactions: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "Interactions avec aliments, alcool ou autres substances"
    },
    alternatives: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "Noms de médicaments alternatifs possibles (génériques ou classe similaire)"
    },
    warningLevel: {
      type: Type.STRING,
      description: "Niveau de risque général ou de vigilance requis (doit être l'un des suivants : 'low', 'medium', 'high')"
    },
    usageTips: { type: Type.STRING, description: "Conseil d'utilisation rapide (ex: prendre pendant les repas)" }
  },
  required: ["name", "description", "indications", "contraindications", "interactions", "alternatives", "warningLevel", "usageTips"]
};

export const fetchMedicationInfo = async (medicationName: string, userContext: string = ""): Promise<MedicationInfo> => {
  try {
    const ai = getAI();
    const contextPrompt = userContext 
      ? `IMPORTANT : L'utilisateur a le profil de santé suivant : "${userContext}". Analyse s'il existe des risques spécifiques ou des contre-indications majeures liées à ce profil pour ce médicament et mentionne-les explicitement dans la description ou les conseils.`
      : "";

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite-preview",
      contents: `Donne-moi des informations médicales précises et structurées pour le médicament : "${medicationName}". 
      ${contextPrompt}
      Réponds UNIQUEMENT au format JSON en Français. Si le médicament n'existe pas ou est mal orthographié, essaie de trouver le plus proche.
      Sois factuel, prudent et synthétique.
      
      Format JSON attendu :
      {
        "name": "Nom",
        "description": "Description",
        "indications": ["Indication 1"],
        "contraindications": ["Contre-indication 1"],
        "interactions": ["Interaction 1"],
        "alternatives": ["Alternative 1"],
        "warningLevel": "low",
        "usageTips": "Conseil"
      }`,
      config: {
        systemInstruction: "Tu es un assistant pharmacien expert. Tu fournis des informations concises, fiables et structurées sur les médicaments en français. Tu analyses les risques en fonction du profil de santé de l'utilisateur si fourni. Tu réponds TOUJOURS au format JSON brut."
      }
    });

    const text = response.text;
    if (!text) throw new Error("Aucune réponse générée par l'IA.");

    // Extraction du JSON même s'il y a du texte autour
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const jsonStr = jsonMatch ? jsonMatch[0] : text;
    
    try {
      const cleanedText = jsonStr.replace(/```json\n?|```/g, "").trim();
      return JSON.parse(cleanedText) as MedicationInfo;
    } catch (parseError) {
      console.error("JSON Parse Error. Raw text:", text);
      throw new Error("Format de réponse invalide reçu de l'IA.");
    }
  } catch (error: any) {
    console.error("Gemini API Error Detail:", {
      message: error.message,
      status: error.status,
      statusText: error.statusText,
      details: error.details,
      raw: error
    });
    throw error;
  }
};