import { GoogleGenAI } from "@google/genai";

export default async function handler(req: any, res: any) {
    // Only allow POST requests for the chat API
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        // Securely read the API key from server environment variables
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            console.error("GEMINI_API_KEY is not defined in the server environment variables.");
            return res.status(500).json({ error: 'Server configuration error: missing API key.' });
        }

        const { contents, systemInstruction } = req.body;

        if (!contents || !Array.isArray(contents)) {
            return res.status(400).json({ error: 'Missing or invalid chat contents in request body.' });
        }

        // Initialize GoogleGenAI with the secure server-side API key
        const ai = new GoogleGenAI({ apiKey });

        // Call Gemini
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents,
            config: {
                systemInstruction,
                temperature: 0.3,
            }
        });

        // Send the response back to the client
        res.status(200).json({ text: response.text });
    } catch (error: any) {
        console.error("Chat API Error:", error);
        res.status(500).json({ error: error.message || 'Internal server error processing chat.' });
    }
}
