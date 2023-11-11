export function Pagination({
  currentPage,
  totalPages,
  onNext,
  onPrev,
  onFirst,
  onLast,
}) {
  return (
    <div
      className={`
        mt-6 flex w-full
        items-center justify-between
        p-2 md:justify-center md:gap-4
      `}
    >
      <button
        type="button"
        onClick={onFirst}
        disabled={currentPage === 1}
        className={`
          hidden hover:underline md:inline
          ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}
        `}
      >
        Primeira
      </button>
      <button
        type="button"
        onClick={onPrev}
        className={`
          rounded-full bg-blue-500 px-4
          py-3 text-white transition duration-300
          hover:bg-blue-600 hover:text-gray-300
          ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}
        `}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <span
        className={`
          hidden text-gray-800 md:inline
        `}
      >
        Página {currentPage} de {totalPages}
      </span>
      <button
        type="button"
        className={`
          rounded-full bg-blue-500 px-4
          py-3 text-white transition duration-300
          hover:bg-blue-600 hover:text-gray-300
          ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}
        `}
        onClick={onNext}
        disabled={currentPage === totalPages}
      >
        Próxima
      </button>
      <button
        type="button"
        className={`
          hidden hover:underline md:inline
          ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}
        `}
        onClick={onLast}
        disabled={currentPage === totalPages}
      >
        Última
      </button>
    </div>
  );
}
