import * as z from 'zod';

const messageSchema = z.object({
    id: z.string(),
    message: z.string(),
    sender_id: z.object({
        id: z.number()
    }),
    created_at: z.string()
});

const propsSchema = z.object({
    messages: z.array(messageSchema),
    currentUserId: z.number()
});

type Message = z.infer<typeof messageSchema>;
type Props = z.infer<typeof propsSchema>;

export { messageSchema, propsSchema };
export type { Message, Props };
