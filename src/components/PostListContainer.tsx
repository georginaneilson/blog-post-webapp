import Post from "./Post";

const ListContainer = () => {
  return (
    <div>
      <div className="mx-4 md:mx-50 md:px-2 xl:mx-100 md:h-screen overflow-y-auto mt-4">
        <Post
          post={{ id: 1, title: "post title", body: "post body", userId: 1 }}
          error={false}
          handleDelete={() => {}}
        />
      </div>
    </div>
  );
};

export default ListContainer;
