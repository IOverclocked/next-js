import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function List({ posts }) {
  const [postsList, setPostsList] = useState(posts);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const _posts = await response.json();

      setPostsList(_posts);
    };

    if (!(posts && posts.length)) {
      fetchData();
    }
  }, [posts]);

  const renderOnePost = (title, id) => {
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
      {posts && posts.length ? (
        <ol>{posts.map(({ title, id }) => renderOnePost(title, id))}</ol>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

List.getInitialProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return { posts: posts.filter((post, index) => index < 20) };
};
