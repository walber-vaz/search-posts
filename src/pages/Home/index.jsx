import { Component } from 'react';
import InputSearch from '../../components/InputSearch';
import { Loading } from '../../components/Loading';
import { NotFoundSearch } from '../../components/NotFoundSearch';
import { Pagination } from '../../components/Pagination';
import { Posts } from '../../components/Posts';
import { MainContainer } from '../../components/common/MainContainer';
import { loadPosts } from '../../functions/loadPosts';

export class Home extends Component {
  state = {
    posts: [],
    currentPage: 1,
    allPosts: [],
    totalPages: 1,
    searchValue: '',
  };

  async componentDidMount() {
    this.loadPostsData(1);
    await loadPosts().then(posts => {
      this.setState({ allPosts: posts.postsAndPhotosAndUsers });
    });
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

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, currentPage, totalPages, searchValue, allPosts } =
      this.state;

    const filteredPosts = searchValue
      ? allPosts.filter(post => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    if (!posts.length && !allPosts.length) {
      return <Loading />;
    }

    return (
      <MainContainer>
        <InputSearch searchValue={searchValue} onChange={this.handleChange} />
        {filteredPosts.length === 0 && (
          <NotFoundSearch searchValue={searchValue} />
        )}
        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
        {!searchValue && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onNext={this.handleNextPage}
            onPrev={this.handlePrevPage}
            onFirst={this.handleFirstPage}
            onLast={this.handleLastPage}
          />
        )}
      </MainContainer>
    );
  }
}
