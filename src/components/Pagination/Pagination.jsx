export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Массив кнопок пагинации
  // (предполагается, что totalPages - это общее количество страниц)
  console.log(totalPages)
  const pages = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <div className="pagination">
      {pages.map(page => (
        <button
          key={page}
          disabled={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      
    </div>
  );
};
