import { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { config } from "../config";
import "./styles/Chatbot.css";

import "./styles/AIAssistantBadge.css";

// SVG Icons

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
${config.experiences.map((e: any) => `- ${e.title} at ${e.company} (${e.startDate} - ${e.endDate}, ${e.location}). ${e.description} Tech: ${e.stack?.join(', ')}`).join('\n')}

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
1. When asked about Rohan's strengths, highlight his versatility across the stack (frontend, backend, AI integration) and his creative problem-solving skills. When asked about weaknesses, frame it positively (e.g., he dives so deep into learning new tools that he has to remind himself to take breaks, or that he's constantly focused on improving).
2. For completely random or irrelevant questions (e.g., recipes, politics, generic jokes), playfully acknowledge the question but smoothly and seamlessly pivot the conversation back to Rohan's engineering skills, projects, or professional background. Do not let the user think there is an error.
3. If a question is slightly outside the explicitly provided data but relates to standard software engineering or AI concepts, use your general knowledge to answer confidently while connecting it back to Rohan's expertise as an AI Integration Engineer.
4. Be concise, professional, and friendly. Do not hallucinate massive unprovided projects, but intelligently extrapolate his capabilities based on his listed skills.
`;

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "bot", content: "Hi there! I'm Rohan's AI Assistant. You can ask me anything about his experience, skills, or projects." }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
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
        } catch (error: any) {
            console.error("Chatbot Error Full Dump:", error);
            console.error("Chatbot Error Message:", error?.message);
            console.error("Chatbot Error Status:", error?.status);

            setMessages(prev => [...prev, {
                role: "bot",
                content: `Oops! I encountered an error: ${error?.message || "Unknown API failure"}. Please try again or reach out to Rohan directly via the contact form.`
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

            {/* Floating Action Button - Replaced with AI Assistant Emoji Component */}
            <div
                className={`chatbot-fab ai-badge-container ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-label="Toggle chat"
            >
                {!isOpen && (
                    <div className={`ai-badge-speech-bubble ${isHovered ? 'active' : ''}`}>
                        <p>Hey, Rohan's AI Assistant here! <span className="wave-emoji">👋</span></p>
                        <div className="speech-bubble-tail"></div>
                    </div>
                )}

                <div className="ai-badge-avatar">
                    {!isOpen && <div className="ai-badge-pulse-ring"></div>}
                    <div className="ai-badge-bot-icon" style={{ opacity: isOpen ? 0 : 1, position: isOpen ? 'absolute' : 'relative', transition: 'opacity 0.3s' }}>
                        🤖
                    </div>
                    <div style={{ opacity: isOpen ? 1 : 0, position: isOpen ? 'relative' : 'absolute', transition: 'opacity 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CloseIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
