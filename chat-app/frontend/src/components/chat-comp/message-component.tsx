'use client';

import { Box, Typography } from '@mui/material';
import { Props } from './interface';
import './chat-component.css';

export default function MessagesComponent({ messages, currentUserId }: Props) {
    return (
        <Box className="chat-messages">
            {messages.map((msg) => {
                const isMe = msg.sender_id.id === currentUserId;

                return (
                    <Box
                        key={msg.id}
                        className={`chat-message ${!isMe ? 'chat-message--me' : 'chat-message--other'
                            }`}
                    >
                        <Box
                            className={`chat-message__bubble ${!isMe ? 'chat-message__bubble--me' : ''
                                }`}
                        >
                            <Typography variant="body2">
                                {msg.message}
                            </Typography>

                            <Typography
                                variant="caption"
                                className="chat-message__time"
                            >
                                {new Date(msg.created_at).toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </Typography>
                        </Box>
                    </Box>
                );
            })}
        </Box>
    );
}
