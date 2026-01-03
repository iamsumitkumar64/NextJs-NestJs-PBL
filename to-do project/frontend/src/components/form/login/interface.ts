import * as z from "zod";

const LoginSchema = z.object({
    email: z.string().trim().min(7).max(20),
    password: z.string().trim().min(1).max(20),
});

type LoginInterface = z.infer<typeof LoginSchema>

export { LoginSchema };
export type { LoginInterface };