import * as z from 'zod';

const conversationSchema = z.object({
    receiver_id: z.number().nullable(),
    conversation_id: z.number().nullable(),
});

type conversationSchemaType = z.infer<typeof conversationSchema>;

export type { conversationSchemaType }
export { conversationSchema };