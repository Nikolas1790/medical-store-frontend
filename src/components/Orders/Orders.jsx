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
  const [ce, setCe] = useState('');

  const limitPerPage = 5;
  console.log(orders)

  // useEffect(() => {
  //   dispatch(ordersInf({}));
  // }, [dispatch]);
  useEffect(() => {
    console.log(`Making request for page: ${currentPage}`);
    dispatch(ordersInf({ page: currentPage, limit: limitPerPage, name: '' || ce }));
  }, [dispatch, currentPage, limitPerPage, ce]);

  const handlePageChange = (page) => {
    console.log(`Page change clicked: ${page}`);
    setCurrentPage(page);
  };
    // Предполагается, что ваш API возвращает общее количество доступных элементов
    const totalOrders = orders.total || 0;
    const totalPages = Math.ceil(totalOrders / limitPerPage);


  return (    
    <ContentContainer>
      <ContentBlock>

        <UserNameFilter  dataFactory={ordersInf} setCe={setCe} />
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