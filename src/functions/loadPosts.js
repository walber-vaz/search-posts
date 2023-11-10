import { fetcher } from '../services/api';

export async function loadPosts() {
  const [postsResponse, photosResponse, usersResponse] = await Promise.all([
    fetcher('/posts'),
    fetcher('/photos'),
    fetcher('/users'),
  ]);

  const postsAndPhotosAndUsers = postsResponse.data.map((post, index) => {
    const user = usersResponse.data.find(user => user.id === post.userId);
    const photoUrl = photosResponse.data[index].url;
    const { userId, ...rest } = post;
    return { ...rest, cover: photoUrl, userId: user.name };
  });

  return postsAndPhotosAndUsers;
}
