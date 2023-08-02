import { z } from "zod";

export const postSchema = z.object({
  title: z
    .string()
    .min(3, { message: "must be at least 3 characters long" })
    .max(191, { message: "must be less than 191 characters long" }),
  content: z.string().min(3, { message: "must be at least 3 characters long" }),
});

export type PostType = z.infer<typeof postSchema>;
