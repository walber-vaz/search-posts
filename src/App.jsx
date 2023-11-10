import { Component } from 'react';
import './App.css';
import { PostCard } from './components/PostCard';
import { fetcher } from './services/api';

export default class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = async () => {
    const [postsResponse, photosResponse, usersResponse] = await Promise.all([
      fetcher('/posts'),
      fetcher('/photos'),
      fetcher('/users'),
    ]);

    const postsAndPhotosAndUsers = postsResponse.data.map((post, index) => {
      const user = usersResponse.data.find(user => user.id === post.userId);
      return {
        ...post,
        cover: photosResponse.data[index].url,
        userId: user.name,
      };
    });
    this.setState({ posts: postsAndPhotosAndUsers });
  };

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
          {posts?.map(post => (
            <PostCard post={post} key={`post-${post.id}`} />
          ))}
        </div>
      </section>
    );
  }
}
