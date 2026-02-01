"use client"

import { useEffect, useState } from "react";
import MessagesComponent from "@/components/chat-comp/message-component";
import { ApiService } from "@/services/Api";
import { Box } from "@mui/material";
import InputComponent from "@/components/chat-comp/input-component";
import "./chat-layout.css";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
    const [messages, setMessages] = useState<any[]>([]);
    const [currentConversationId, setCurrentConversationId] = useState<number>(1);

    useEffect(() => {
        const fetchMessages = async () => {
            const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1bWl0QGdtYWlsLmNvbSIsImlhdCI6MTc2OTg2MTMxNn0.BYIWLhIzIGcUTnpqlEQoqhrFcoa-QB09D-2so70EvMI';
            const res = await ApiService(`${process.env.NEXT_PUBLIC_BACKEND_URL}/message/${currentConversationId}`, "GET", access_token);
            setMessages(res.data.data);
        };

        if (currentConversationId) {
            fetchMessages();
        }
    }, [currentConversationId]);

    return (
        <Box className="chat-layout">
            {/* Rest Children */}
            <Box className="chat-layout__sidebar">
                {children}
            </Box>

            {/* Chat Side Layout */}
            <Box className="chat-layout__content">
                {/* <Box> */}
                <MessagesComponent
                    messages={messages}
                    currentUserId={1}
                />

                {/* Input Box */}
                <InputComponent />
            </Box>
        </Box>
    );
}

export default ChatLayout;