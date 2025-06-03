import { useEffect, useState } from "react";
import { deletePostData, getPostsData } from "../services/jsonPlaceholder";
import { PostItem } from "@/components/Post";
import { HttpStatusCode } from "axios";

export function usePosts() {
  const [data, setData] = useState<[] | PostItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [deleteError, setDeleteError] = useState<number | null>(null);

  const fetchData: () => Promise<void> = async () => {
    setLoading(true);

    try {
      const response = await getPostsData();
      setData(response);
    } catch (error) {
      setError(error as Error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (postId: number) => {
    try {
      const deleteResponse = await Promise.resolve(deletePostData(postId));

      if (deleteResponse === HttpStatusCode.Ok) {
        setData((prev) => prev.filter((post) => post.id !== postId));
      } else {
        setDeleteError(postId);
      }
    } catch (err) {
      setDeleteError(postId);
    }
  };

  return { data, error, loading, deleteError, handleDelete };
}
