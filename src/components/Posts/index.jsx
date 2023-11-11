import { PostCard } from '../PostCard';

export function Posts({ posts }) {
  return (
    <div
      className={`
        mt-8 grid grid-cols-1 gap-4
        md:grid-cols-2
        lg:grid-cols-3
      `}
    >
      {posts?.map(post => (
        <PostCard post={post} key={`post-${post.id}`} />
      ))}
    </div>
  );
}
