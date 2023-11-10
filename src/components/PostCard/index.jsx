import './styles.css';

export function PostCard({ post }) {
  return (
    <div className="post">
      <img src={post.cover} alt={post.title} />
      <article className="post-content">
        <h2>
          {post.title.length > 15
            ? `${post.title.substring(0, 15)}...`
            : post.title}
        </h2>
        <div className="post-info">
          <p className="post-body">
            {post.body.length > 80
              ? `${post.body.substring(0, 80)}...`
              : post.body}
          </p>
          <p className="post-author">
            Author: <span>{post.userId}</span>
          </p>
        </div>
      </article>
    </div>
  );
}
