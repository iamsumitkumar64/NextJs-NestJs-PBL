import * as z from 'zod';

const messageSchema = z.object({
    id: z.string(),
    text: z.string(),
    senderId: z.string(),
    createdAt: z.string()
});

const propsSchema = z.object({
    messages: z.array(messageSchema),
    currentUserId: z.string()
});

type Message = z.infer<typeof messageSchema>;
type Props = z.infer<typeof propsSchema>;

export { messageSchema, propsSchema };
export type { Message, Props };
