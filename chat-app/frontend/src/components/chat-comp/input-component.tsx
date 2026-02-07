import { TextField, Box, Button, Popover } from "@mui/material";
import EmojiPicker from "emoji-picker-react";
import { enqueueSnackbar } from "notistack";
import { ChangeEvent, useState } from "react";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';
import "./chat-component.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { ApiService } from "@/services/Api";
import { chatbodySchema } from "./interface";

export default function InputComponent() {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | undefined>(undefined);
    const [message, setMessage] = useState<string>("");
    const currentConversation = useSelector((state: RootState) => state.conversationReducer);

    const handleEmojiOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(undefined);
    }

    const handleMessage = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setMessage(event.currentTarget.value);
    }

    const SendMessage = async () => {
        if (!message) {
            enqueueSnackbar("Empty Message");
        }
        const access_token = localStorage.getItem("token")
        const chatbody = {
            message: message,
            receiver_id: currentConversation.receiver_id,
            conversation_id: currentConversation.conversation_id
        };
        const cleanedData = Object.fromEntries(
            Object.entries(chatbody).filter(([_, value]) => value != null) // Removes null/undefined
        );
        await ApiService(`${process.env.NEXT_PUBLIC_BACKEND_URL}/chat`, 'POST', access_token || '', JSON.stringify(cleanedData));
    }

    return (
        <Box className="chat-input">
            <TextField
                className="chat-input__textfield"
                id="standard-basic"
                placeholder="Ready to go"
                variant="standard"
                value={message}
                onChange={handleMessage}
            />

            <Button onClick={handleEmojiOpen} className="chat-input__button">
                <EmojiEmotionsIcon />
            </Button>

            <Button onClick={SendMessage} className="chat-input__button">
                <SendIcon />
            </Button>

            <Popover
                open={!!anchorEl}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
                <EmojiPicker
                    open={true}
                    onEmojiClick={(emojiObject) =>
                        setMessage(prev => prev + emojiObject.emoji)
                    }
                />
            </Popover>
        </Box>
    );
}
