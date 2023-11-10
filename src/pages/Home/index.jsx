import { Component } from 'react';
import { Pagination } from '../../components/Pagination';
import { Posts } from '../../components/Posts';
import { MainContainer } from '../../components/common/MainContainer';
import { loadPosts } from '../../functions/loadPosts';

export class Home extends Component {
  state = {
    posts: [],
    currentPage: 1,
    totalPages: 1,
  };

  componentDidMount() {
    this.loadPostsData(1);
  }

  loadPostsData = (page = 1) => {
    const limit = 8;
    loadPosts(limit, page).then(({ postsAndPhotosAndUsers, totalPosts }) => {
      this.setState({
        posts: postsAndPhotosAndUsers,
        totalPages: Math.ceil(totalPosts / limit),
        currentPage: page,
      });
    });
  };

  handleNextPage = () => {
    const { currentPage, totalPages } = this.state;
    if (currentPage < totalPages) {
      this.loadPostsData(currentPage + 1);
    }
  };

  handlePrevPage = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.loadPostsData(currentPage - 1);
    }
  };

  handleFirstPage = () => {
    this.loadPostsData(1);
  };

  handleLastPage = () => {
    const { totalPages } = this.state;
    this.loadPostsData(totalPages);
  };

  render() {
    const { posts, currentPage, totalPages } = this.state;

    return (
      <MainContainer>
        <Posts posts={posts} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNext={this.handleNextPage}
          onPrev={this.handlePrevPage}
          onFirst={this.handleFirstPage}
          onLast={this.handleLastPage}
        />
      </MainContainer>
    );
  }
}
