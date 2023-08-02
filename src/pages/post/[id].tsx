import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { api } from "~/utils/api";

function DisplaySinglePost() {
  //router hook to get the id from the url and pass it to the query
  const id = Number(useRouter().query.id);
  const post = api.post.byId.useQuery({ id });

  //below you can see the main component but also the error, loading states and no data state
  return (
    <main className="flex h-[100vh] flex-col items-start justify-around bg-light-blue sm:flex-row sm:bg-white sm:p-5">
      <header className="flex w-full min-w-[200px] flex-col items-center bg-light-blue p-5 text-center sm:w-[20vw] sm:rounded-subRounded">
        <h1 className="text-3xl font-bold">BestBlog</h1>
        <Link href="/" className="mainButton">
          Back
        </Link>
      </header>
      <section className="flex h-full w-full flex-col items-center bg-light-blue p-5 sm:h-full sm:max-h-[90vh] sm:max-w-[60vw] sm:justify-between sm:rounded-mainRounded">
        <article className="flex h-auto max-h-[70vh] w-full flex-col gap-3 overflow-scroll rounded-subRounded bg-white p-5 sm:max-h-full">
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

          {!post.data && !post.isLoading && (
            <div className="flex flex-col items-center">
              <Image
                src="/images/lookingForSomething.png"
                alt="404"
                width={300}
                height={300}
              />
              <p className="font-bold">
                Looks like you got lost. Quickly! Return to the Homepage.
              </p>
            </div>
          )}
        </article>
      </section>
    </main>
  );
}

export default DisplaySinglePost;
