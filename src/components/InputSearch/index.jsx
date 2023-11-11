import { memo } from 'react';
import './styles.css';

function InputSearch({ searchValue, onChange }) {
  return (
    <input
      onChange={onChange}
      value={searchValue}
      type="search"
      placeholder="Search"
      className="input-search"
    />
  );
}

export default memo(InputSearch);
