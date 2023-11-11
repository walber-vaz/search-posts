import { useCallback, useEffect, useState } from 'react';
import InputSearch from '../../components/InputSearch';
import { Loading } from '../../components/Loading';
import { NotFoundSearch } from '../../components/NotFoundSearch';
import { Pagination } from '../../components/Pagination';
import { Posts } from '../../components/Posts';
import { MainContainer } from '../../components/common/MainContainer';
import { loadPosts } from '../../functions/loadPosts';

export function Home() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allPosts, setAllPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchValue, setSearchValue] = useState('');

  const loadPostsData = useCallback((page = 1) => {
    const limit = 8;
    loadPosts(limit, page).then(({ postsAndPhotosAndUsers, totalPosts }) => {
      setPosts(postsAndPhotosAndUsers);
      setTotalPages(Math.ceil(totalPosts / limit));
      setCurrentPage(page);
    });
  }, []);

  const loadPostsInitial = useCallback(async () => {
    loadPostsData(1);
    await loadPosts().then(posts => {
      setAllPosts(posts.postsAndPhotosAndUsers);
    });
  }, [loadPostsData]);

  useEffect(() => {
    loadPostsInitial();
  }, [loadPostsInitial]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      loadPostsData(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      loadPostsData(currentPage - 1);
    }
  };

  const handleFirstPage = () => {
    loadPostsData(1);
  };

  const handleLastPage = () => {
    loadPostsData(totalPages);
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearchValue(value);
  };

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
      <InputSearch searchValue={searchValue} onChange={handleChange} />
      {filteredPosts.length === 0 && (
        <NotFoundSearch searchValue={searchValue} />
      )}
      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
      {!searchValue && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNext={handleNextPage}
          onPrev={handlePrevPage}
          onFirst={handleFirstPage}
          onLast={handleLastPage}
        />
      )}
    </MainContainer>
  );
}
