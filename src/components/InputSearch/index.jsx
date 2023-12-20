import { memo } from 'react';

function InputSearchComponent({ searchValue, onChange }) {
  return (
    <input
      onChange={onChange}
      value={searchValue}
      type="search"
      placeholder="Search"
      className={`
        form-input mb-2 w-full
        rounded-xl px-4 py-3 text-xl
        md:w-1/2
      `}
    />
  );
}

const InputSearch = memo(InputSearchComponent);
export default InputSearch;
