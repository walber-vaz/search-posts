import { Component } from 'react';
import { Posts } from './components/Posts';
import { MainContainer } from './components/common/MainContainer';
import { loadPosts } from './functions/loadPosts';

export default class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    loadPosts().then(postsAndPhotosAndUsers => {
      this.setState({ posts: postsAndPhotosAndUsers });
    });
  }

  render() {
    const { posts } = this.state;

    return (
      <MainContainer>
        <Posts posts={posts} />
      </MainContainer>
    );
  }
}
