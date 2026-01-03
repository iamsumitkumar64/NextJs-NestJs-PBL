import * as z from 'zod';

const taskSchema = z.object({
    id: z.number(),
    task: z.string(),
    description: z.string(),
    status: z.number()
});

type taskInterface = z.infer<typeof taskSchema>;

export { taskSchema };
export type { taskInterface };