import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const key = process.env.GEMINI_API_KEY || process.env.API_KEY;

if (!key) {
  console.error("No API key found in environment variables (GEMINI_API_KEY or API_KEY)");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: key });

async function generateLogo() {
  const prompt = "A high-quality, professional app icon for a medical app called 'PharmaGuide'. The icon should be a stylized white medical cross with a magnifying glass inside, on a vibrant blue rounded square background. Clean, modern, minimalist, 3D render style, high resolution, 512x512.";
  
  try {
    console.log("Generating logo...");
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: prompt,
          },
        ],
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64Data = part.inlineData.data;
        const buffer = Buffer.from(base64Data, 'base64');
        const publicDir = path.join(process.cwd(), 'public');
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir);
        }
        fs.writeFileSync(path.join(publicDir, 'logo.png'), buffer);
        console.log("Logo generated and saved to public/logo.png");
        return;
      }
    }
    console.error("No image part found in response");
  } catch (error) {
    console.error("Error generating logo:", error);
    process.exit(1);
  }
}

generateLogo();
