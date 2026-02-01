'use client'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useEffect, useState } from 'react';
import { ApiService } from '@/services/Api';
import OnlineDot from './user-state';

export default function UserComponent() {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        async function fetchData() {
            const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1bWl0QGdtYWlsLmNvbSIsImlhdCI6MTc2OTg2MTMxNn0.BYIWLhIzIGcUTnpqlEQoqhrFcoa-QB09D-2so70EvMI';
            const result = await ApiService(`http://localhost:4000/users`, 'GET', access_token);
            setUsers(result.data.data);
        }
        fetchData();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid #ddd' }}>
            <List sx={{ flex: 1, bgcolor: 'background.paper' }}>
                {users.map((user) => (
                    <ListItem key={user.id} disablePadding >
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