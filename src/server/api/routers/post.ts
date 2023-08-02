import { Prisma } from "@prisma/client";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { prisma } from "~/server/db";
import { z } from "zod";

//a utility function that takes a generated type and returns a type-safe object
const defaultPostSelect = Prisma.validator<Prisma.PostSelect>()({
  id: true,
  title: true,
  content: true,
  createdAt: true,
});

export const postRouter = createTRPCRouter({
  //gets all posts
  //used here: src\components\DisplayAllPosts.tsx
  all: publicProcedure.query(async () => {
    const data = await prisma.post.findMany({
      select: defaultPostSelect,
      orderBy: { createdAt: "desc" },
    });
    return data;
  }),
  //gets a post by id
  //used here: src\pages\post\[id].tsx
  byId: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ input }) => {
      const { id } = input;
      const data = await prisma.post.findUnique({
        where: { id },
        select: defaultPostSelect,
      });
      return data;
    }),
  //adds a post to the database
  //used here: src\components\CreatePostForm.tsx
  add: publicProcedure
    .input(
      z.object({
        title: z.string().min(3).max(191),
        content: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const data = await prisma.post.create({
        data: input,
      });
      return data;
    }),
});
