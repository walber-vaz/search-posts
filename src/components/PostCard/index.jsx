export function PostCard({ post }) {
  return (
    <div
      className={`
        m-4 flex h-[450]
        w-80 flex-col justify-between rounded-lg
        bg-white p-4 shadow-lg
        transition duration-500 ease-in-out
        hover:-translate-y-1 hover:scale-105
      `}
    >
      <img
        src={post.cover}
        alt={post.title}
        className="h-56 w-full rounded-lg object-cover"
      />
      <article className="flex h-40 flex-col justify-between">
        <h2 className="mt-2 text-2xl font-bold">
          {post.title.length > 15
            ? `${post.title.substring(0, 15)}...`
            : post.title}
        </h2>
        <div className="flex flex-col justify-between gap-2">
          <p
            className={`
              text-base
              ${
                post.body.length > 80
                  ? 'text-gray-500'
                  : 'font-semibold text-gray-900'
              }
            `}
          >
            {post.body.length > 80
              ? `${post.body.substring(0, 80)}...`
              : post.body}
          </p>
          <p
            className={`
              text-sm
              ${
                post.body.length > 80
                  ? 'font-semibold text-gray-900'
                  : 'text-gray-500'
              }
            `}
          >
            Author: <span className="font-normal underline">{post.userId}</span>
          </p>
        </div>
      </article>
    </div>
  );
}
