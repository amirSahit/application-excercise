import { Prisma } from "@prisma/client";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { prisma } from "~/server/db";

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
});
