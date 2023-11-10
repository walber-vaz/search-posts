import { Component } from 'react';

export default class App extends Component {
  state = {
    counter: 0,
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
  };
  timer = null;

  componentDidMount() {
    this.handleTimeout();
  }

  componentDidUpdate() {
    this.handleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = 'Ola mundo';

    this.timer = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 2000);
  };

  render() {
    const { posts, counter } = this.state;

    return (
      <section>
        {posts?.map(post => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
        <hr />
        <h1>{counter}</h1>
      </section>
    );
  }
}
