import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function PostId({ post }) {
  const { query } = useRouter();
  const { postId } = query;
  const [postContent, setPostContent] = useState(post);
  const { body, title } = postContent;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const _postsContent = await response.json();

      setPostContent(_postsContent);
    };

    if (!post) {
      fetchData();
    }
  }, [post]);

  return (
    <div>
      {post ? (
        <>
          <h2>{title}</h2>
          <p>{body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

PostId.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const { postId } = query;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = response.json()

  return { post };
};
