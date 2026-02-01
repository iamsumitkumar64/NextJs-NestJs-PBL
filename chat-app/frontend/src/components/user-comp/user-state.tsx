'use client'
import { Badge, Avatar, ListItemAvatar } from '@mui/material';

type Props = {
    online: boolean;
    image: string;
};

export default function OnlineDot({ online, image }: Props) {
    return (
        <Badge
            variant="dot"
            overlap="circular"
            sx={{
                '& .MuiBadge-badge': {
                    bgcolor: online ? 'green' : 'grey',
                    boxShadow: '0 0 0 2px white',
                },
            }}
        >
            <ListItemAvatar>
                <Avatar src={image} />
            </ListItemAvatar>
        </Badge>
    );
}