import Head from "next/head";
import { useState } from "react";

import BestBlogHeader from "~/components/BestBlogHeader";
import CreatePostForm from "~/components/CreatePostForm";
import DisplayAllPosts from "~/components/DisplayAllPosts";

export default function Home() {
  //state to manage the visibility of CreatePostForm component (true = visible, false = hidden)
  const [createPost, setCreatePost] = useState(false);

  return (
    <>
      <Head>
        <title>Application Exercise</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-start justify-around sm:flex-row sm:p-5">
        <div className="sticky top-0 flex w-full flex-col sm:w-auto sm:gap-5">
          <BestBlogHeader
            setCreatePost={setCreatePost}
            createPost={createPost}
          />
          {createPost && <CreatePostForm setCreatePost={setCreatePost} />}
        </div>
        <DisplayAllPosts />
      </main>
    </>
  );
}
