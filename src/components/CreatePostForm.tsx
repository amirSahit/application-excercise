import { useForm } from "react-hook-form";

type UserPost = {
  title: string;
  content: string;
};

function CreatePostForm() {
  const methodes = useForm<UserPost>();
  function onSubmit(data: UserPost) {
    console.log(data);
  }
  return (
    <>
      <form
        onSubmit={methodes.handleSubmit(onSubmit)}
        className="flex w-full flex-col items-start gap-2 bg-light-blue p-5 sm:max-w-[60vw] sm:justify-between sm:rounded-mainRounded"
      >
        <h2 className="text-xl">Create Your Post</h2>
        <label htmlFor="title" className="font-bold">
          Title:
        </label>
        <input
          {...methodes.register("title")}
          className="w-full rounded-subRounded p-2"
        />
        <label htmlFor="content" className="font-bold">
          Content:
        </label>
        <textarea
          {...methodes.register("content")}
          className="w-full rounded-subRounded p-2"
        />
        <button
          type="submit"
          className="self-center rounded-subRounded bg-white px-4 py-2 text-lg font-bold text-light-blue"
        >
          Publish Post
        </button>
      </form>
    </>
  );
}

export default CreatePostForm;
