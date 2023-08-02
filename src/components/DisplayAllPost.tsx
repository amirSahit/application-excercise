import Link from "next/link";
import { api } from "~/utils/api";

function DisplayAllPost() {
  const posts = api.post.all.useQuery();
  return (
    <div className="sm:scrollbarteal flex w-full flex-col items-center bg-light-blue p-5 sm:max-h-[90vh] sm:max-w-[60vw] sm:justify-between sm:overflow-y-auto sm:rounded-mainRounded">
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
      </section>
    </div>
  );
}

export default DisplayAllPost;