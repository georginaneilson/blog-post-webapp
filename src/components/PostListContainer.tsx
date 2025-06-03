import { usePosts } from "../hooks/usePosts";
import Post, { PostItem } from "./Post";
import SearchBar from "./SearchBar";
import { useState } from "react";

const ListContainer = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data: posts, handleDelete, deleteError } = usePosts();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filteredPostArray = (posts: PostItem[], searchTerm: string) => {
    const filteredPosts = posts.filter((post) => {
      return post.title.includes(searchTerm);
    });

    return filteredPosts.map((post) => (
      <Post
        key={post.id}
        post={post}
        handleDelete={handleDelete}
        error={deleteError === post.id}
      />
    ));
  };

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
      <SearchBar handleSearch={handleSearch} searchValue={searchValue} />
      <div className="mx-4 md:mx-50 md:px-2 xl:mx-100 md:h-screen overflow-y-auto mt-4">
        {searchValue === ""
          ? postArray()
          : filteredPostArray(posts, searchValue)}
      </div>
    </div>
  );
};

export default ListContainer;
