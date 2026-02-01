'use client';

import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import OnlineDot from '../user-comp/user-state';
import { ApiService } from '@/services/Api';
import "./chat-component.css";

export default function ConversationsList() {
    const [conversations, setConversations] = useState<any[] | null>(null);

    useEffect(() => {
        async function fetchData() {
            const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1bWl0QGdtYWlsLmNvbSIsImlhdCI6MTc2OTg2MTMxNn0.BYIWLhIzIGcUTnpqlEQoqhrFcoa-QB09D-2so70EvMI';
            const result = await ApiService(`${process.env.NEXT_PUBLIC_BACKEND_URL}/conversation`, 'GET', access_token);
            setConversations(result.data.data);
        }
        fetchData();
    }, []);

    if (!conversations) {
        return <div>Loading...</div>;
    }

    return (
        <List className='conversation-list'>
            {conversations.map((conversation) => {
                const member = conversation.members[0]?.user_id;
                if (!member) return null;

                return (
                    <ListItem key={conversation.id} disablePadding>
                        <OnlineDot
                            online={member.is_online}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaAj5p4CK9kTwiKel4klxZDGRwKGnfFOxXEg&s"
                        />
                        <ListItemText
                            primary={member.username}
                            secondary={member.email}
                        />
                    </ListItem>
                );
            })}
        </List>
    );
}
