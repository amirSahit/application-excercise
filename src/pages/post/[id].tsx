import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { api } from "~/utils/api";

function SinglePostPage() {
  const id = Number(useRouter().query.id);
  const post = api.post.byId.useQuery({ id });
  return (
    <main className="flex flex-col items-start justify-around sm:flex-row sm:p-5">
      <Link
        href="/"
        className="sticky top-0 w-full bg-light-blue p-5 text-center sm:w-[20vw] sm:rounded-subRounded"
      >
        <h1 className="text-3xl font-bold">Back</h1>
      </Link>
      <section className="flex w-full flex-col items-center bg-light-blue p-5 sm:max-h-[90vh] sm:max-w-[60vw] sm:justify-between sm:rounded-mainRounded">
        <article className="flex flex-col gap-3 rounded-subRounded bg-white p-5">
          <p className="text-end">
            {post.data?.createdAt.toLocaleDateString()}
          </p>
          <h1 className="text-3xl font-bold">{post.data?.title}</h1>
          <p>{post.data?.content}</p>
        </article>
      </section>
    </main>
  );
}

export default SinglePostPage;
