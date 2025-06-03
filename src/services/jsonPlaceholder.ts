import { PostItem } from "@/components/Post";
import { API_ROUTES } from "../constants/apiRoutes";

import axios, { HttpStatusCode } from "axios";

// TODO: Could add ZOD or similar validation here

/**
 * get post data
 *
 * @returns post data array or empty array
 */

export const getPostsData = async (): Promise<PostItem[] | []> => {
  try {
    const response = await axios(API_ROUTES.posts);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts", error);
    return [];
  }
};

/**
 * delete post data
 *
 * @param postId - post id
 * @returns returns the api response status or null
 */

export const deletePostData = async (
  postId: number,
): Promise<HttpStatusCode | null> => {
  try {
    const response = await axios.delete(API_ROUTES.post(postId));
    return response?.status;
  } catch (error) {
    console.error("Error deleting post", error);
    return null;
  }
};
