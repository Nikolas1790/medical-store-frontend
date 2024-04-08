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


// import React from "react";
// import { PaginationButton, PaginationConteiner, ThreeDots } from "./Pagination.styled";

// export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   const pages = [...Array(totalPages).keys()].map(num => num + 1);

//   const renderPages = () => {
//     const visiblePages = [];
    
//     // Добавляем первые четыре страницы
//     visiblePages.push(...pages.slice(0, 4));

//     // Добавляем три точки, если общее количество страниц больше 4
//     if (totalPages > 4) {
//       visiblePages.push(null); // Значение null для отображения трех точек
//     }

//     // Добавляем последнюю страницу
//     visiblePages.push(totalPages);

//     return visiblePages;
//   };

//   return (
//     <PaginationConteiner>
//       {renderPages().map((page, index) => (
//         // Рендерим кнопки для каждой страницы или трех точек
//         <React.Fragment key={index}>
//           {page === null ? (
//             <ThreeDots>...</ThreeDots>
//           ) : (
//             <PaginationButton
//               key={page}
//               disabled={page === currentPage}
//               onClick={() => onPageChange(page)}
//             >
//               {page}
//             </PaginationButton>
//           )}
//         </React.Fragment>
//       ))}
//     </PaginationConteiner>
//   );
// };
