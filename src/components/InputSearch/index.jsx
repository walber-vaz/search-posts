import { memo } from 'react';

function InputSearch({ searchValue, onChange }) {
  return (
    <input
      onChange={onChange}
      value={searchValue}
      type="search"
      placeholder="Search"
      className={`
        mb-2 w-full rounded-lg
        px-4 py-3 text-2xl
        text-gray-500 focus:outline-none
        focus:ring-2 focus:ring-purple-600
        md:w-1/4 md:text-xl
      `}
    />
  );
}

export default memo(InputSearch);
