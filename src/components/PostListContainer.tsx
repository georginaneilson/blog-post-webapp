import { usePosts } from "@/hooks/usePosts";
import Post, { PostItem } from "./Post";

const ListContainer = () => {
  const { data: posts, handleDelete, deleteError } = usePosts();

  const postArray = () => {
    return posts.map((post: PostItem) => (
      <Post
        key={post.id}
        post={post}
        handleDelete={handleDelete}
        error={deleteError === post.id}
      />
    ));
  };

  return (
    <div>
      <div className="mx-4 md:mx-50 md:px-2 xl:mx-100 md:h-screen overflow-y-auto mt-4">
        {postArray()}
      </div>
    </div>
  );
};

export default ListContainer;
