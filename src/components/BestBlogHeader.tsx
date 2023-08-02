type BestBlogHeaderProps = {
  createPost: boolean;
  setCreatePost: React.Dispatch<React.SetStateAction<boolean>>;
};

function BestBlogHeader({ createPost, setCreatePost }: BestBlogHeaderProps) {
  return (
    <header className="w-full min-w-[200px] bg-light-blue p-5 text-center sm:w-[20vw] sm:rounded-subRounded">
      <h1 className="text-3xl font-bold">BestBlog</h1>
      <button
        onClick={() => setCreatePost(!createPost)}
        className="mt-5 w-[80vw] rounded-subRounded bg-white px-4 py-2 text-lg font-bold text-light-blue sm:w-full"
      >
        {!createPost ? "Create Your Post" : "Close"}
      </button>
    </header>
  );
}

export default BestBlogHeader;
