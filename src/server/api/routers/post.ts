import { Prisma } from "@prisma/client";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { prisma } from "~/server/db";
import { z } from "zod";

const defaultPostSelect = Prisma.validator<Prisma.PostSelect>()({
  id: true,
  title: true,
  content: true,
  createdAt: true,
});

export const postRouter = createTRPCRouter({
  all: publicProcedure.query(async () => {
    const data = await prisma.post.findMany({
      select: defaultPostSelect,
      orderBy: { createdAt: "desc" },
    });
    return data;
  }),

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

  add: publicProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
      })
    )
    .query(async ({ input }) => {
      const data = await prisma.post.create({
        data: input,
      });
      return data;
    }),
});
