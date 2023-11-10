import { Component } from 'react';

export default class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        posts: [
          {
            id: 1,
            title: 'Lorem ipsum dolor sit amet.',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
          },
          {
            id: 2,
            title: 'Lorem ipsum dolor sit amet.',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
          },
          {
            id: 3,
            title: 'Lorem ipsum dolor sit amet.',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
          },
          {
            id: 4,
            title: 'Lorem ipsum dolor sit amet.',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
          },
        ],
      });
    }, 5000);
  }

  render() {
    const { posts } = this.state;

    if (!posts.length) {
      return <h1>Loading...</h1>;
    }

    return (
      <section>
        {posts?.map(post => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      </section>
    );
  }
}
