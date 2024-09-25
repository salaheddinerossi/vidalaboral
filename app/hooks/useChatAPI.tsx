import { useState } from "react";

type ChatResponse = {
    answer: string;
};

export const useChatAPI = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const sendMessage = async (message: string, sessionId: string): Promise<ChatResponse | null> => {
        setLoading(true);
        try {
            const response = await fetch("http://127.0.0.1:8000/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ question: message, session_id: sessionId }),  // Send the correct fields
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            const data: ChatResponse = await response.json();
            setLoading(false);
            return data;
        } catch (error) {
            console.error("Error sending message:", error);
            setLoading(false);
            return null;
        }
    };
    return { sendMessage, loading };
};
