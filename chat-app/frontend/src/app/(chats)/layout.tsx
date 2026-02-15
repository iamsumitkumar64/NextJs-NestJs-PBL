"use client"

import { useEffect, useState } from "react";
import MessagesComponent from "@/components/chat-comp/message-component";
import { ApiService } from "@/services/Api";
import { Box } from "@mui/material";
import InputComponent from "@/components/chat-comp/input-component";
import "./chat-layout.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { socket } from "@/services/socket";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
    const [messages, setMessages] = useState<any[]>([]);
    const currentConversation = useSelector((state: RootState) => state.conversationReducer);
    const currentUser = useSelector((state: RootState) => state.currentuserReducer);

    useEffect(() => {
        socket.on('onMessage', handleSocket);
    }, []);

    useEffect(() => {
        fetchMessages();
    }, [currentConversation]);

    const fetchMessages = async () => {
        try {
            if (currentConversation.receiver_id == null && currentConversation.conversation_id == null) {
                return;
            }
            console.log(currentUser, currentConversation);
            const access_token = localStorage.getItem("token")
            const res = await ApiService(`${process.env.NEXT_PUBLIC_BACKEND_URL}/message/${currentConversation.receiver_id || currentConversation.conversation_id}`, "GET", access_token || '');
            setMessages(res.data.data);
        } catch (err) { console.log(err) }
    };

    const handleSocket = (socketDtaa: any) => {
        console.log(socketDtaa)
    }

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
                    currentUserId={currentUser.user_id}
                />

                {/* Input Box */}
                <InputComponent />
            </Box>
        </Box>
    );
}

export default ChatLayout;