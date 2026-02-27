import { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { config } from "../config";
import "./styles/Chatbot.css";

// SVG Icons
const SparklesIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fab-icon">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4M3 5h4" />
    </svg>
);

const CloseIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="fab-close-icon">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const SendIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
);

const BotAvatarIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chatbot-avatar-inner">
        <rect x="3" y="11" width="18" height="10" rx="2"></rect>
        <circle cx="12" cy="5" r="2"></circle>
        <path d="M12 7v4"></path>
        <line x1="8" y1="16" x2="8" y2="16"></line>
        <line x1="16" y1="16" x2="16" y2="16"></line>
    </svg>
);

type Message = {
    role: "user" | "bot";
    content: string;
};

// Compile config data into a system prompt string
const generateSystemInstruction = () => `
You are an AI assistant living on Rohan Vibhuti's personal portfolio website.
Your goal is to answer questions from recruiters and visitors about Rohan's professional experience, skills, and projects concisely and accurately.
Always maintain a professional, friendly, and helpful tone. Format your answers nicely using markdown (bullet points, bold text).

Here is everything you need to know about Rohan:
Name: ${config.developer.fullName} (${config.developer.title})
Summary: ${config.developer.description}
About: ${config.about.description}

Education:
${config.education.map(e => `- ${e.degree} from ${e.institution} (${e.period}), CGPA: ${e.cgpa}`).join('\n')}

Experience:
${config.experiences.map(e => `- ${e.position} at ${e.company} (${e.period}, ${e.location}). ${e.description} Tech: ${e.technologies.join(', ')}`).join('\n')}

Projects:
${config.projects.map(p => `- ${p.title} (${p.category}): Technologies used - ${p.technologies}`).join('\n')}

Skills:
Develop: ${config.skills.develop.tools.join(', ')}
Data & AI: ${config.skills.design.tools.join(', ')}

Contact info:
Email: ${config.contact.email}
GitHub: ${config.contact.github}
LinkedIn: ${config.contact.linkedin}

Rules:
1. ONLY answer questions related to Rohan, his career, software engineering, AI, or data science. If a user asks something completely irrelevant (like how to cook pasta, or write a poem not about Rohan), politely decline and steer the conversation back to Rohan's profile.
2. Be concise but thorough.
3. Don't make up any information that isn't provided here.
`;

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "bot", content: "Hi there! I'm Rohan's AI Assistant. You can ask me anything about his experience, skills, or projects." }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom of chat
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isLoading]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setInput("");
        setMessages(prev => [...prev, { role: "user", content: userMsg }]);
        setIsLoading(true);

        try {
            // It's generally insecure to bundle API keys in the client, but since we have no backend,
            // we must use the VITE_ prefixed environment variable directly.
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

            if (!apiKey) {
                throw new Error("Gemini API key is missing from environment variables.");
            }

            const ai = new GoogleGenAI({ apiKey });

            // Build chat history for context
            const contents = messages.slice(1).map(msg => ({
                role: msg.role === "bot" ? "model" : "user",
                parts: [{ text: msg.content }]
            }));

            // Append current message
            contents.push({ role: "user", parts: [{ text: userMsg }] });

            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents,
                config: {
                    systemInstruction: generateSystemInstruction(),
                    temperature: 0.3, // Keep it professional and factual
                }
            });

            const responseText = response.text;
            if (typeof responseText === "string") {
                setMessages(prev => [...prev, { role: "bot", content: responseText }]);
            } else {
                throw new Error("Empty response");
            }
        } catch (error) {
            console.error("Chatbot Error:", error);
            setMessages(prev => [...prev, {
                role: "bot",
                content: "Oops! I encountered an error. Please try again or reach out to Rohan directly via the contact form."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="chatbot-wrapper">
            {/* Chat Window */}
            <div className={`chatbot-window ${isOpen ? "open" : ""}`}>
                <div className="chatbot-header">
                    <div className="chatbot-avatar">
                        <BotAvatarIcon />
                    </div>
                    <div className="chatbot-title">
                        <h3>Rohan's Assistant</h3>
                        <span><div className="chatbot-status-dot"></div> Online</span>
                    </div>
                </div>

                <div className="chatbot-messages" data-lenis-prevent>
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.role}`}>
                            {msg.role === "bot" ? (
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {msg.content}
                                </ReactMarkdown>
                            ) : (
                                msg.content
                            )}
                        </div>
                    ))}

                    {isLoading && (
                        <div className="typing-indicator">
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="chatbot-input">
                    <input
                        type="text"
                        placeholder="Ask about Rohan..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={isLoading}
                    />
                    <button
                        className="chatbot-send-btn"
                        onClick={handleSend}
                        disabled={!input.trim() || isLoading}
                        aria-label="Send message"
                    >
                        <SendIcon />
                    </button>
                </div>
            </div>

            {/* Floating Action Button */}
            <button
                className={`chatbot-fab ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle chat"
            >
                <SparklesIcon />
                <CloseIcon />
            </button>
        </div>
    );
};

export default Chatbot;
