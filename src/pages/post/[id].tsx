import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { api } from "~/utils/api";

function SinglePostPage() {
  const id = Number(useRouter().query.id);
  const post = api.post.byId.useQuery({ id });
  return (
    <main className="flex items-start justify-around p-10">
      <Link
        href="/"
        className="flex min-h-[20vh] min-w-[20vw] flex-col justify-between rounded-mainRounded bg-light-blue p-5"
      >
        <h1 className="text-[2vw] font-bold">Back</h1>
      </Link>
      <article className="flex w-[50vw] flex-col rounded-mainRounded bg-light-blue p-5">
        <section className="flex flex-col gap-4 rounded-subRounded bg-white p-5">
          <p className="text-end text-[2vh]">
            {post.data?.createdAt.toLocaleDateString()}
          </p>
          <h2 className="text-[4vh]">{post.data?.title}</h2>
          <p className="text-[2vh]">{post.data?.content}</p>
        </section>
      </article>
    </main>
  );
}

export default SinglePostPage;
