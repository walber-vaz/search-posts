import { Component } from 'react';
import './App.css';
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
            <div key={post.id} className="post">
              <img src={post.cover} alt={post.title} />
              <article className="post-content">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <p>Author: {post.userId}</p>
              </article>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
