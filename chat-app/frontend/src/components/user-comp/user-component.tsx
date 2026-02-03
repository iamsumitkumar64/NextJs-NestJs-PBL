'use client'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useEffect, useState } from 'react';
import { ApiService } from '@/services/Api';
import OnlineDot from './user-state';
import './user-component.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { currentConversation } from '@/store/slices/current-conversation';

export default function UserComponent() {
    const [users, setUsers] = useState<any[]>([]);
    const dispatch = useDispatch()
    const currentConversationID = useSelector((state: RootState) => state.conversationReducer)

    useEffect(() => {
        async function fetchData() {
            const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1bWl0QGdtYWlsLmNvbSIsImlhdCI6MTc2OTg2MTMxNn0.BYIWLhIzIGcUTnpqlEQoqhrFcoa-QB09D-2so70EvMI';
            const result = await ApiService(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, 'GET', access_token);
            setUsers(result.data.data);
        }
        fetchData();
    }, []);

    const setCurrentUserConversation = (receiver_id: number) => {
        dispatch(currentConversation({ conversation_id: null, receiver_id: receiver_id }));
    }

    if (!users) {
        return <div>Loading...</div>;
    }

    return (
        <div className="chat-users">
            <List className="chat-users__list">
                {users.map((user) => (
                    <ListItem key={user.id} disablePadding className="chat-users__item" onClick={() => setCurrentUserConversation(user.id)}>
                        <OnlineDot online={user.is_online} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaAj5p4CK9kTwiKel4klxZDGRwKGnfFOxXEg&s' />
                        <ListItemText
                            primary={user.username}
                            secondary={user.email}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}