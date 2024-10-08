"use client";
import React, { useState, useEffect, useRef } from "react";
import { Box, Input, Button, VStack, HStack } from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';
import { motion, useInView } from 'framer-motion';
import { useChatAPI } from "../../hooks/useChatAPI";
import ReactMarkdown from "react-markdown";
import Image from 'next/image';
import avatarImage from '../../../public/images/avatar.jpg';

type Message = {
    id: number;
    text: string;
    sender: "user" | "bot";
};

export const ChatComponent: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "¡Hola! ¿Cómo puedo asistirte hoy?", sender: "bot" },
    ]);
    const [input, setInput] = useState<string>("");
    const [sessionId, setSessionId] = useState<string>("");
    const { sendMessage, loading } = useChatAPI();

    const chatRef = useRef(null); // Reference for chat container
    const isInView = useInView(chatRef, { once: true });

    useEffect(() => {
        const newSessionId = uuidv4();
        setSessionId(newSessionId);
    }, []);

    const handleSendMessage = async () => {
        if (input.trim()) {
            const newMessage: Message = { id: messages.length + 1, text: input, sender: "user" };
            setMessages([...messages, newMessage]);
            setInput("");

            const response = await sendMessage(input, sessionId);

            if (response && response.answer) {
                setMessages((prev) => [
                    ...prev,
                    { id: prev.length + 1, text: response.answer, sender: "bot" }, // Use 'answer' field
                ]);
            }
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-950 to-gray-900">
            <motion.div
                ref={chatRef}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="relative z-10 bg-gray-900 bg-opacity-50 backdrop-blur-md text-white w-full max-w-4xl h-[600px] rounded-lg shadow-lg overflow-hidden p-4"
            >
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                    className="relative z-10 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xl font-bold py-4 px-6 rounded-t-lg shadow-md"
                >
                    Tu asistente virtual para los procesos de Vida Laboral.
                </motion.div>

                <div className="relative z-10 flex justify-center py-2">
                    <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
                        <Image
                            src={avatarImage}
                            alt="Chat Bot Avatar"
                            width={220}
                            height={220}
                            objectFit="cover"
                        />
                    </div>
                </div>

                <VStack
                    spacing={4}
                    p={6}
                    className="h-[350px] w-full overflow-y-auto relative z-10 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
                    align="stretch"
                    as={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }} // Increased delay for the chat messages
                >
                    {messages.map((message) => (
                        <HStack
                            key={message.id}
                            justify={message.sender === "user" ? "flex-end" : "flex-start"}
                            as={motion.div}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }} // Added delay to each message
                        >
                            <Box
                                className={`inline-block px-4 py-2 rounded-lg ${
                                    message.sender === "user" ? "bg-teal-500" : "bg-gray-700"
                                } text-white shadow-md`}
                                maxW="75%"
                            >
                                <ReactMarkdown>{message.text}</ReactMarkdown>
                            </Box>
                        </HStack>
                    ))}
                </VStack>

                {/* Input Section */}
                <HStack
                    p={4}
                    className="relative z-10 bg-gray-900 bg-opacity-30"
                    as={motion.div}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }} // Delay added to the input section
                >
                    <Input
                        variant="unstyled"
                        placeholder="Type your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                        className="py-2 px-1 rounded outline-none bg-gray-800 text-white  focus:ring-2 flex-grow mr-2 "
                    />
                    <Button
                        onClick={handleSendMessage}
                        isLoading={loading}
                        colorScheme="teal"
                        disabled={loading}
                        className="px-4 py-2 text-white transition duration-200"
                    >
                        Send
                    </Button>
                </HStack>
            </motion.div>

            <div className="absolute inset-0 z-0 pointer-events-none bg-dot-pattern opacity-40" />
        </section>
    );
};
