import { PaginationButton, PaginationConteiner } from "./Pagination.styled";

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
        &lt;
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
        current='true'
        onClick={goToNextPage}
      >
        &gt;
      </PaginationButton>
    </PaginationConteiner>
  );
};