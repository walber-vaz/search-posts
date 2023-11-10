import React from 'react';
import './styles.css';

export function Pagination({ currentPage, totalPages, onNext, onPrev }) {
  return (
    <div className="container-pagination">
      <button onClick={onPrev} disabled={currentPage === 1}>
        Anterior
      </button>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <button onClick={onNext} disabled={currentPage === totalPages}>
        Próxima
      </button>
    </div>
  );
}
