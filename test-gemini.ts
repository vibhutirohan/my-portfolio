import { GoogleGenAI } from "@google/genai";

async function test() {
    try {
        const ai = new GoogleGenAI({ apiKey: "AIzaSyBgdWHea6AfwPQfqC6TWMro0mrlrBWEf_Y" });
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [{ role: "user", parts: [{ text: "Hello" }] }]
        });
        console.log("Success:", response.text);
    } catch (error: any) {
        console.error("Error Message:", error.message);
    }
}

test();
