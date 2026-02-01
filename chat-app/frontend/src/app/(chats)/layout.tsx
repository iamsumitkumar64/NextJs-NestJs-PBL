"use client"

import { useEffect, useState } from "react";
import MessagesComponent from "@/components/chat-comp/message-component";
import { ApiService } from "@/services/Api";
import { Box } from "@mui/material";
import InputComponent from "@/components/chat-comp/input-component";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
    const [messages, setMessages] = useState<any[]>([]);
    const [currentConversationId, setCurrentConversationId] = useState<number>(1);

    useEffect(() => {
        const fetchMessages = async () => {
            const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1bWl0QGdtYWlsLmNvbSIsImlhdCI6MTc2OTg2MTMxNn0.BYIWLhIzIGcUTnpqlEQoqhrFcoa-QB09D-2so70EvMI';
            const res = await ApiService(`http://localhost:4000/message/${currentConversationId}`, "GET", access_token);
            setMessages(res.data.data);
        };

        if (currentConversationId) {
            fetchMessages();
        }
    }, [currentConversationId]);

    return (
        <Box sx={{ display: "flex", flexDirection: "row", bgcolor: "gray" }}>
            <Box sx={{ minWidth: "20vw", overflow: "scroll" }}>
                {children}
            </Box>
            <Box sx={{ minWidth: "80vw", overflow: "scroll" }} >
                <MessagesComponent
                    messages={messages}
                    currentUserId={1}
                />
                <InputComponent />
            </Box>
        </Box >
    );
}

export default ChatLayout;