import { fetcher } from '../services/api';

export async function loadPosts(limit, page) {
  const start = page ? (page - 1) * limit : 0;
  const [postsResponse, photosResponse, usersResponse] = await Promise.all([
    fetcher(`/posts?_start=${start}&_limit=${limit}`),
    fetcher('/photos'),
    fetcher('/users'),
  ]);

  const postsAndPhotosAndUsers = postsResponse.data.map((post, index) => {
    const user = usersResponse.data.find(user => user.id === post.userId);
    const photoUrl = photosResponse.data[index].url;
    const { userId, ...rest } = post;
    return { ...rest, cover: photoUrl, userId: user.name };
  });

  const totalPosts = postsResponse.headers['x-total-count'];

  return {
    postsAndPhotosAndUsers,
    totalPosts,
  };
}
