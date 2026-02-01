"use client"

import MessagesComponent from "@/components/chat-comp/message-component";
import { Box } from "@mui/material";


export const dummyMessages = [
    {
        id: '1',
        text: 'Hey 👋',
        senderId: 'user_2',
        createdAt: '2026-01-31T10:01:00Z',
    },
    {
        id: '2',
        text: 'Hi! How are you?',
        senderId: 'user_123',
        createdAt: '2026-01-31T10:01:20Z',
    },
    {
        id: '3',
        text: 'All good. Working on the chat module.',
        senderId: 'user_2',
        createdAt: '2026-01-31T10:02:00Z',
    },
    {
        id: '4',
        text: 'Nice. WhatsApp-style UI looks clean 😄',
        senderId: 'user_123',
        createdAt: '2026-01-31T10:02:40Z',
    },
    {
        id: '5',
        text: 'Yep. Next step is WebSocket.',
        senderId: 'user_2',
        createdAt: '2026-01-31T10:03:10Z',
    },
    {
        id: '6',
        text: 'Yep. Next step is WebSocket.',
        senderId: 'user_2',
        createdAt: '2026-01-31T10:03:10Z',
    },
    {
        id: '7',
        text: 'Yep. Next step is WebSocket.',
        senderId: 'user_2',
        createdAt: '2026-01-31T10:03:10Z',
    },
    {
        id: '8',
        text: 'Yep. Next step is WebSocket.',
        senderId: 'user_2',
        createdAt: '2026-01-31T10:03:10Z',
    },
    {
        id: '9',
        text: 'Yep. Next step is WebSocket.',
        senderId: 'user_2',
        createdAt: '2026-01-31T10:03:10Z',
    },
    {
        id: '10',
        text: 'Yep. Next step is WebSocket.',
        senderId: 'user_2',
        createdAt: '2026-01-31T10:03:10Z',
    },
    {
        id: '11',
        text: 'Yep. Next step is WebSocket.',
        senderId: 'user_2',
        createdAt: '2026-01-31T10:03:10Z',
    },
    {
        id: '12',
        text: 'Yep. Next step is WebSocket.',
        senderId: 'user_2',
        createdAt: '2026-01-31T10:03:10Z',
    },
    {
        id: '13',
        text: 'Yep. Next step is WebSocket.',
        senderId: 'user_2',
        createdAt: '2026-01-31T10:03:10Z',
    },
];

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box sx={{ minWidth: "20vw", overflow: "scroll" }}>
                {children}
            </Box>
            <MessagesComponent
                messages={dummyMessages}
                currentUserId="user_123"
            />
        </Box>
    );
}

export default ChatLayout;