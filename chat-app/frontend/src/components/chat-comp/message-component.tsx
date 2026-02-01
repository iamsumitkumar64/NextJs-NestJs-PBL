'use client';

import { Box, Typography } from '@mui/material';
import { Props } from './interface';

export default function MessagesComponent({ messages, currentUserId }: Props) {
    return (
        <Box
            sx={{
                minHeight: "88vh",
                maxHeight: "88vh",
                flex: 2,
                p: 2,
                bgcolor: '#a49c8f',
                overflow: "scroll"
            }}
        >
            {messages.map((msg) => {
                const isMe = msg.sender_id.id === currentUserId;

                return (
                    <Box
                        key={msg.id}
                        sx={{
                            display: 'flex',
                            justifyContent: isMe ? 'flex-end' : 'flex-start',
                            mb: 1.2, overflow: "scroll"
                        }}
                    >
                        <Box
                            sx={{
                                maxWidth: '70%',
                                px: 1.5,
                                py: 1,
                                borderRadius: 2,
                                bgcolor: isMe ? '#d9fdd3' : '#ffffff',
                                boxShadow: '0 1px 1px rgba(0,0,0,0.15)',
                            }}
                        >
                            <Typography variant="body2">
                                {msg.message}
                            </Typography>

                            <Typography
                                variant="caption"
                                sx={{
                                    display: 'block',
                                    textAlign: 'right',
                                    mt: 0.5,
                                    color: 'text.secondary',
                                }}
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
