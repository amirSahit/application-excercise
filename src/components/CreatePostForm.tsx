import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostType, postSchema } from "~/types/post";

function CreatePostForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    formState,
  } = useForm<PostType>({
    resolver: zodResolver(postSchema),
  });

  function onSubmit(post: PostType) {
    console.log(post);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-start gap-2 bg-light-blue p-5 sm:max-w-[60vw] sm:justify-between sm:rounded-mainRounded"
      >
        <h2 className="text-xl">Create Your Post</h2>
        <label htmlFor="title" className="font-bold">
          Title:{" "}
          {errors.title && (
            <span className="text-redError">{errors.title.message}</span>
          )}
        </label>
        <input
          {...register("title")}
          className="w-full rounded-subRounded p-2"
        />
        <label htmlFor="content" className="font-bold">
          Content:{" "}
          {errors.content && (
            <span className="text-redError">{errors.content.message}</span>
          )}
        </label>
        <textarea
          {...register("content")}
          className="w-full rounded-subRounded p-2"
        />
        <button
          disabled={Object.keys(formState.errors).length > 0}
          type="submit"
          className="self-center rounded-subRounded bg-white px-4 py-2 text-lg font-bold text-light-blue disabled:cursor-not-allowed disabled:text-redError/20"
        >
          Publish Post
        </button>
      </form>
    </>
  );
}

export default CreatePostForm;
