import './styles.css';

export function NotFoundSearch({ searchValue }) {
  return (
    <div className="container-not-found">
      <h1>Not Found</h1>
      <p>
        We did not find anything with the term: <strong>{searchValue}</strong>
      </p>
    </div>
  );
}
