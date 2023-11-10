import './styles.css';

export function PostCard({ post }) {
  return (
    <div className="post">
      <img src={post.cover} alt={post.title} />
      <article className="post-content">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>Author: {post.userId}</p>
      </article>
    </div>
  );
}
