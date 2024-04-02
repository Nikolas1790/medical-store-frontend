import { ContentBlock, ContentContainer } from "common/GiobalStyles";
import UserNameFilter from "components/UserNameFilter/UserNameFilter";
import { productsInf } from "../../redux/ePharmacy/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectProductsInf } from "../../redux/ePharmacy/selector";
import { useEffect, useState } from "react";
import ProductsAll from "components/ProductsAll/ProductsAll";
import { Pagination } from "components/Pagination/Pagination";

export default function Products() {  
  const dispatch = useDispatch();
  const products = useSelector(selectProductsInf);  
  const [currentPage, setCurrentPage] = useState(1);
  const [filterName, setFilterName] = useState('');
  const limitPerPage = 5;

  useEffect(() => {
    dispatch(productsInf({ page: currentPage, limit: limitPerPage, name: '' || filterName }));
  }, [dispatch, currentPage, limitPerPage, filterName]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
    // Предполагается, что ваш API возвращает общее количество доступных элементов
  const totalProducts = products.total || 0;
  const totalPages = Math.ceil(totalProducts / limitPerPage);
  return (
    <ContentContainer>
      <ContentBlock>

        <UserNameFilter dataFactory={productsInf} plholder="Product  Name" setFilterName={setFilterName} setCurrentPage={setCurrentPage} />
        <div>
        <ProductsAll products={products.products} currentPage={currentPage} />
        <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>

      </ContentBlock>
    </ContentContainer>
  );
}