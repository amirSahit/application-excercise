import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { api } from "~/utils/api";

function SinglePostPage() {
  const id = Number(useRouter().query.id);
  const post = api.post.byId.useQuery({ id });

  return (
    <main className="flex flex-col items-start justify-around sm:flex-row sm:p-5">
      <header className="sticky top-0 flex w-full min-w-[200px] flex-col justify-center bg-light-blue p-5 text-center sm:w-[20vw] sm:rounded-subRounded">
        <h1 className="text-3xl font-bold">BestBlog</h1>
        <Link
          href="/"
          className="mt-5 w-[80vw] self-center rounded-subRounded bg-white px-4 py-2 text-lg font-bold text-light-blue sm:w-full"
        >
          Back
        </Link>
      </header>

      <section className="flex h-[100vh] w-full flex-col items-center bg-light-blue p-5 sm:h-full sm:max-h-[90vh] sm:max-w-[60vw] sm:justify-between sm:rounded-mainRounded">
        <article className="flex w-full flex-col gap-3 rounded-subRounded bg-white p-5">
          <p className="text-end">
            {post.data?.createdAt.toLocaleDateString()}
          </p>
          <h1 className="text-3xl font-bold">{post.data?.title}</h1>
          <p>{post.data?.content}</p>
          {post.isError && (
            <p className="text-red-500">
              Oh no! Something went wrong. Please go back the the homepage and
              try again.
            </p>
          )}
          {post.isLoading && <p>Loading...</p>}
        </article>
      </section>
    </main>
  );
}

export default SinglePostPage;
