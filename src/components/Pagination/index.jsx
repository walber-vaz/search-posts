import React from 'react';
import './styles.css';

export function Pagination({
  currentPage,
  totalPages,
  onNext,
  onPrev,
  onFirst,
  onLast,
}) {
  return (
    <div className="container-pagination">
      <button
        className="first-btn"
        onClick={onFirst}
        disabled={currentPage === 1}
      >
        Primeira
      </button>
      <button
        className="btn-pagination"
        onClick={onPrev}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <button
        className="btn-pagination"
        onClick={onNext}
        disabled={currentPage === totalPages}
      >
        Próxima
      </button>
      <button
        className="first-btn"
        onClick={onLast}
        disabled={currentPage === totalPages}
      >
        Última
      </button>
    </div>
  );
}
