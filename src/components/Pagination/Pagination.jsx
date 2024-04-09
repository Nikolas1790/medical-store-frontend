import { PaginationButton, PaginationConteiner, PaginationSvg } from "./Pagination.styled";
import sprite from '../../img/sprite.svg';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map(num => num + 1);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <PaginationConteiner>
      <PaginationButton
        disabled={currentPage === 1}
        current='true'
        onClick={goToPreviousPage}
      >
        <PaginationSvg>
          <use href={`${sprite}#icon-chevron-left`} />
        </PaginationSvg>
      </PaginationButton>

      {pages.map(page => (
        <PaginationButton
          key={page}
          disabled={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PaginationButton>
      ))}      

      <PaginationButton
        disabled={currentPage === totalPages}
        current='last'
        onClick={goToNextPage}
      >
        <PaginationSvg >
          <use href={`${sprite}#icon-chevron-right`} />
        </PaginationSvg>
      </PaginationButton>
    </PaginationConteiner>
  );
};