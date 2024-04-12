import { ContentBlock, ContentContainer } from "common/GiobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { selectOrdersInf } from "../../redux/ePharmacy/selector";
import { ordersInf } from "../../redux/ePharmacy/operations";
import { useEffect, useState } from "react";
import OrdersAll from "components/OrdersAll/OrdersAll";
import UserNameFilter from "components/UserNameFilter/UserNameFilter";
import { Pagination } from "components/Pagination/Pagination";

export default function Orders() {  
  const dispatch = useDispatch();
  const orders = useSelector(selectOrdersInf);  
  const [currentPage, setCurrentPage] = useState(1);
  const [filterName, setFilterName] = useState('');
  const limitPerPage = 5;

  useEffect(() => {
    dispatch(ordersInf({ page: currentPage, limit: limitPerPage, name: '' || filterName }));
  }, [dispatch, currentPage, limitPerPage, filterName]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalOrders = orders.total || 0;
  const totalPages = Math.ceil(totalOrders / limitPerPage);

  return (    
    <ContentContainer>
      <ContentBlock>
        <UserNameFilter  dataFactory={ordersInf} setFilterName={setFilterName} setCurrentPage={setCurrentPage} />

        <div>
          <OrdersAll orders={orders.orders} currentPage={currentPage} />
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