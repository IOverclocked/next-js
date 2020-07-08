import { IPost } from "../types";

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

const getPosts = async (numberOfPosts: number): Promise<IPost[]> => {
  const response: Response = await fetch(`${API_URL}`); 
  const posts: IPost[] = await response.json();
  return posts.filter((post: IPost, index: number) => index < numberOfPosts);
}
const getPost = async (postId: number): Promise<IPost> => {
  const response: Response = await fetch(`${API_URL}/${postId}`);
  const post: IPost = await response.json();
  return post;
}

export default {
  getPosts,
  getPost
}