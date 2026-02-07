import * as z from 'zod';

const currentUserSchema = z.object({
    user_id: z.number().nullable(),
});

type currentUserSchemaType = z.infer<typeof currentUserSchema>;

export type { currentUserSchemaType }
export { currentUserSchema };