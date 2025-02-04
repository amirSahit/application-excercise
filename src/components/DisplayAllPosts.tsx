import Link from "next/link";
import Image from "next/image";

import { api } from "~/utils/api";

function DisplayAllPosts() {
  //query to get all posts
  const posts = api.post.all.useQuery();

  //below you can see the main component but also the error, loading states and no data state
  return (
    <div className="flex w-full flex-col items-center bg-light-blue p-5 sm:max-h-[90vh] sm:max-w-[60vw] sm:justify-between sm:overflow-y-auto sm:rounded-mainRounded">
      <section className="flex flex-col gap-5 sm:grid sm:grid-cols-2 sm:items-start">
        {posts.data?.map((post, idx) => (
          <article
            key={idx}
            className="max-w-[80vw] rounded-subRounded bg-white p-2 hover:scale-105 sm:min-w-full sm:max-w-[40vw]"
          >
            <Link href={`/post/${post.id}`}>
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-end">{post.createdAt.toLocaleDateString()}</p>
            </Link>
          </article>
        ))}

        {posts.isError && (
          <p className="text-red-500">
            Oh no! Something went wrong. Refresh the page and try again.
          </p>
        )}

        {posts.isLoading && <p>Loading...</p>}

        {!posts.data && !posts.isLoading && (
          <div className="flex flex-col items-center">
            <Image
              src="/images/lookingForSomething.png"
              alt="404"
              width={300}
              height={300}
            />
            <p className="font-bold">Mmmmmh. You need to post something!</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default DisplayAllPosts;
