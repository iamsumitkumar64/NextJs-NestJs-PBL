import { TextField, Box, Button, Popover } from "@mui/material";
import EmojiPicker from "emoji-picker-react";
import { enqueueSnackbar } from "notistack";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';

export default function InputComponent() {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | undefined>(undefined);
    const [message, setMessage] = useState<string>("");

    const handleEmojiOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(undefined);
    }

    const handleMessage = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setMessage(event.currentTarget.value);
    }

    const SendMessage = () => {
        if (!message) {
            enqueueSnackbar("Empty Message");
        }
    }

    return (
        <Box
            sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}
        >
            <TextField
                sx={{ minWidth: "65vw" }}
                id="standard-basic"
                placeholder="Ready to go"
                variant="standard"
                value={message} onChange={handleMessage}
            />

            <Button onClick={handleEmojiOpen} sx={{ color: "white" }}>
                <EmojiEmotionsIcon />
            </Button>

            <Button onClick={SendMessage} sx={{ color: "white" }}>
                <SendIcon />
            </Button>

            <Popover
                open={!!anchorEl}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <EmojiPicker open={true} onEmojiClick={(emojiObject) => setMessage(prev => prev + emojiObject.emoji)} />
            </Popover>
        </Box>
    );
}