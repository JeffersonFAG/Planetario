import React from 'react';

import { PagButton } from '@/src/components/PaginationButton';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const prevPage = () => onPageChange(currentPage - 1);
  const nextPage = () => onPageChange(currentPage + 1);

  return (
    <div className="flex mt-4 gap-4 item">
      <PagButton
        label={'Anterior'}
        currentPage={currentPage}
        totalPages={totalPages}
        handlePage={prevPage}
        isNextBtn={false}
      />
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <PagButton
        label={'Siguiente'}
        currentPage={currentPage}
        totalPages={totalPages}
        handlePage={nextPage}
        isNextBtn={true}
      />
    </div>
  );
};
