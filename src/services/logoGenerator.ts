import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateAndSaveLogo() {
  const prompt = "A high-quality, professional app icon for a medical app called 'PharmaGuide'. The icon should be a stylized white medical cross with a magnifying glass inside, on a vibrant blue rounded square background. Clean, modern, minimalist, high resolution, 512x512.";
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: prompt }] },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64Data = part.inlineData.data;
        // On va envoyer cette donnée au serveur via une API temporaire ou simplement l'afficher pour que l'agent puisse la voir
        console.log("LOGO_BASE64_START");
        console.log(base64Data);
        console.log("LOGO_BASE64_END");
        return;
      }
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

generateAndSaveLogo();
