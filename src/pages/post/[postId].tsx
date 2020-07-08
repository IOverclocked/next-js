import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { PostsHandler } from '../../api/services'
import { IPost } from '../../api/types';
import { NextPageContext } from 'next';

interface IProps {
  post: IPost
}

export default function PostId({ post }: IProps) {
  const { query } = useRouter();
  const { postId } = query;
  const [postContent, setPostContent] = useState<IPost>(post);
  const { body, title } = postContent;

  useEffect(() => {
    const fetchData = async () => {
      const _postsContent: IPost = await PostsHandler.getPost(Number(postId))
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

PostId.getInitialProps = async (ctx: NextPageContext) => {
  const { query } = ctx;
  const { postId } = query;
  const post: IPost = await PostsHandler.getPost(Number(postId));
  return { post };
};
