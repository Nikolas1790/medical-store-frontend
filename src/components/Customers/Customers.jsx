import { ContentBlock, ContentContainer } from "common/GiobalStyles";
import UserNameFilter from "components/UserNameFilter/UserNameFilter";
import { customersInf } from "../../redux/ePharmacy/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectCustomersInf } from "../../redux/ePharmacy/selector";
import { useEffect, useState } from "react";
import CustomersAll from "components/CustomersAll/CustomersAll";
import { Pagination } from "components/Pagination/Pagination";

export default function Customers() {  
  const dispatch = useDispatch();
  const customers = useSelector(selectCustomersInf);  
  const [currentPage, setCurrentPage] = useState(1);
  const [filterName, setFilterName] = useState('');
  const limitPerPage = 5;

  useEffect(() => {
    dispatch(customersInf({ page: currentPage, limit: limitPerPage, name: '' || filterName }));
  }, [dispatch, currentPage, limitPerPage, filterName]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
    // Предполагается, что ваш API возвращает общее количество доступных элементов
  const totalCustomers = customers.total || 0;
  const totalPages = Math.ceil(totalCustomers / limitPerPage);

  return (
    <ContentContainer>
      <ContentBlock>

        <UserNameFilter dataFactory={customersInf} setFilterName={setFilterName} setCurrentPage={setCurrentPage} />
        <div>
        <CustomersAll customers={customers.customers} currentPage={currentPage} />
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