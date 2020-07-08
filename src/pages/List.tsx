import Link from 'next/link';
import { useState, useEffect } from 'react';
import { IPost } from '../api/types';
import { PostsHandler } from '../api/services';

interface IProps {
  posts: IPost[]
}

export default function List({ posts }: IProps) {
  const [postsList, setPostsList] = useState<IPost[]>(posts);

  useEffect(() => {
    const fetchData = async () => {
      const _posts: IPost[] = await PostsHandler.getPosts(20)
      setPostsList(_posts);
    };

    if (!posts?.length) {
      fetchData();
    }
  }, [posts]);

  const renderOnePost = (title: string, id: number): React.ReactNode => {
    return (
      <li key={`/post/${id}`}>
        <Link as={`/post/${id}`} href="/post/[postId]">
          <a>{title}</a>
        </Link>
      </li>
    );
  };

  return (
    <div>
      <h2>This is posts list</h2>
      {postsList && postsList.length ? (
        <ol>{postsList.map(({ title, id }) => renderOnePost(title, id))}</ol>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}


List.getInitialProps = async () => {
  const posts: IPost[] = await PostsHandler.getPosts(20)
  return { posts }
};
