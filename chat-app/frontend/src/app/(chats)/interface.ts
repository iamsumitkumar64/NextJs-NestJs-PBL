import * as z from "zod";

export const messageSchema = z.object({
    id: z.string(),
    text: z.string(),
    senderId: z.string(),
    createdAt: z.string(),
});

export const messagesPropsSchema = z.object({
    messages: z.array(messageSchema),
    currentUserId: z.string(),
});

export type Message = z.infer<typeof messageSchema>;
export type MessagesProps = z.infer<typeof messagesPropsSchema>;
