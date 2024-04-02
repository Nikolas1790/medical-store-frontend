import { ContentBlock, ContentContainer } from "common/GiobalStyles";
import UserNameFilter from "components/UserNameFilter/UserNameFilter";
import { suppliersInf } from "../../redux/ePharmacy/operations";
import SuppliersAll from "components/SuppliersAll/SuppliersAll";
import { useDispatch, useSelector } from "react-redux";
import { selectSuppliersInf } from "../../redux/ePharmacy/selector";
import { useEffect, useState } from "react";
import { Pagination } from "components/Pagination/Pagination";

export default function Suppliers() {  
  const dispatch = useDispatch();
  const suppliers = useSelector(selectSuppliersInf);  
  const [currentPage, setCurrentPage] = useState(1);
  const [filterName, setFilterName] = useState('');
  const limitPerPage = 5;

  useEffect(() => {
    dispatch(suppliersInf({ page: currentPage, limit: limitPerPage, name: '' || filterName }));
  }, [dispatch, currentPage, limitPerPage, filterName]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
    // Предполагается, что ваш API возвращает общее количество доступных элементов
  const totalSuppliers = suppliers.total || 0;
  const totalPages = Math.ceil(totalSuppliers / limitPerPage);

  return (
    <ContentContainer>
      <ContentBlock>

        <UserNameFilter dataFactory={suppliersInf} setFilterName={setFilterName} setCurrentPage={setCurrentPage} />
        <div>
        <SuppliersAll suppliers={suppliers.suppliers} currentPage={currentPage} />
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