import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(100),
    email: z.email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});


export type ContactSchema = z.infer<typeof contactSchema>;