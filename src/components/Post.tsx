import clsx from "clsx";
import DeleteIcon from "../assets/DeleteIcon";
export type PostItem = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

interface PostProps {
  post: PostItem;
  error: boolean;
  handleDelete: (id: number) => void;
}

/**
 * Individual post component
 *
 * @param post - Post object
 * @param handleDelete - Function to handle delete
 */

export const Post = ({ post, error, handleDelete }: PostProps) => {
  const { id, title, body } = post;
  return (
    <div
      key={id}
      className="border-1 border-b-2 border-gray-100 rounded-md p-4 mb-4 flex flex-col"
    >
      <div className="flex w-full">
        <div className="w-2/3">
          <h2 className="text-base mb-2 font-semibold text-gray-800 leading-tight line-clamp-2">
            {title}
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
            {body}
          </p>
        </div>
        {/* placeholder for image */}
        <div className="ml-2 md:ml-8 animate-pulse bg-gray-300 w-1/3" />
      </div>
      {error && (
        <p className="self-end text-red-500 text-xs mt-2">
          Error deleting post, please try again
        </p>
      )}
      <button
        className={clsx("self-end", { "mt-2": error, "mt-8": !error })}
        onClick={() => handleDelete(id)}
        aria-label="delete post"
      >
        <DeleteIcon className="w-4 h-4 fill-gray-500" />
      </button>
    </div>
  );
};

export default Post;
