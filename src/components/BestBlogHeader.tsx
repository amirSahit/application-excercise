import { CreatePostProps } from "~/types/post";

function BestBlogHeader({ createPost, setCreatePost }: CreatePostProps) {
  return (
    <header className="w-full min-w-[200px] bg-light-blue p-5 text-center sm:w-[20vw] sm:rounded-subRounded">
      <h1 className="text-3xl font-bold">BestBlog</h1>
      <button onClick={() => setCreatePost(!createPost)} className="mainButton">
        {!createPost ? "Create Your Post" : "Close"}
      </button>
    </header>
  );
}

export default BestBlogHeader;
