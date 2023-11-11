import './styles.css';

export default function InputSearch({ searchValue, onChange }) {
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
