export function NotFoundSearch({ searchValue }) {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-500">Not Found</h1>
      <p className="text-2xl font-bold text-blue-500">
        We did not find anything with the term:{' '}
        <strong className="animate-pulse text-red-500">{searchValue}</strong>
      </p>
    </div>
  );
}
