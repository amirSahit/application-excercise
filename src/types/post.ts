import { z } from "zod";

//schema used here: src\components\CreatePostForm.tsx
export const postSchema = z.object({
  title: z
    .string()
    .min(3, { message: "must be at least 3 characters long" })
    .max(191, { message: "must be less than 191 characters long" }),
  content: z.string().min(3, { message: "must be at least 3 characters long" }),
});

export type PostType = z.infer<typeof postSchema>;

//used here: src\components\CreatePostForm.tsx && src\components\BestBlogHeader.tsx
//parent: src\pages\index.tsx
export type CreatePostProps = {
  createPost: boolean;
  setCreatePost: React.Dispatch<React.SetStateAction<boolean>>;
};
