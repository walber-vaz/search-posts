export function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1
        className={`
          animate-pulse text-4xl font-bold
          text-blue-500
        `}
      >
        Loading<span className="animate-ping text-blue-500">...</span>
      </h1>
    </div>
  );
}
