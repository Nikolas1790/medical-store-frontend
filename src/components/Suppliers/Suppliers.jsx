import { ContentBlock, ContentContainer, FilterAddConteiner } from "common/GiobalStyles";
import UserNameFilter from "components/UserNameFilter/UserNameFilter";
import { suppliersInf } from "../../redux/ePharmacy/operations";
import SuppliersAll from "components/SuppliersAll/SuppliersAll";
import { useDispatch, useSelector } from "react-redux";
import { selectSuppliersInf } from "../../redux/ePharmacy/selector";
import { useEffect, useState } from "react";
import { Pagination } from "components/Pagination/Pagination";
import BtnAddEditSuppliers from "components/BtnAddEditSuppliers/BtnAddEditSuppliers";

export default function Suppliers() {  
  const dispatch = useDispatch();
  const suppliers = useSelector(selectSuppliersInf);  
  const [currentPage, setCurrentPage] = useState(1);
  const [filterName, setFilterName] = useState('');
  const limitPerPage = 5;

  useEffect(() => {
    dispatch(suppliersInf({ page: currentPage, limit: limitPerPage, name: '' || filterName }));
  }, [dispatch, currentPage, limitPerPage, filterName, suppliers.total]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalSuppliers = suppliers.total || 0;
  const totalPages = Math.ceil(totalSuppliers / limitPerPage);

  return (
    <ContentContainer>
      <ContentBlock>
        <FilterAddConteiner>
          <UserNameFilter dataFactory={suppliersInf} setFilterName={setFilterName} setCurrentPage={setCurrentPage} />

          <BtnAddEditSuppliers />
        </FilterAddConteiner>

        <div>
        <SuppliersAll suppliers={suppliers.suppliers} />
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