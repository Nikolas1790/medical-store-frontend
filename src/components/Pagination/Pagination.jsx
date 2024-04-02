import { PaginationButton, PaginationConteiner } from "./Pagination.styled";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map(num => num + 1);
  return (
    <PaginationConteiner>
      {pages.map(page => (
        <PaginationButton
          key={page}
          disabled={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {/* {page} */}
        </PaginationButton>
      ))}      
    </PaginationConteiner>
  );
};
