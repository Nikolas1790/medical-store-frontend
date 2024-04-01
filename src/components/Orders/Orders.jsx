import { ContentBlock, ContentContainer } from "common/GiobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { selectOrdersInf } from "../../redux/ePharmacy/selector";
import { ordersInf } from "../../redux/ePharmacy/operations";
import { useEffect } from "react";
import OrdersUserNameFilter from "components/OrdersUserNameFilter/OrdersUserNameFilter";
import OrdersAll from "components/OrdersAll/OrdersAll";

export default function Orders() {  
  const dispatch = useDispatch();
  const orders = useSelector(selectOrdersInf);  
  // console.log(orders)

  useEffect(() => {
    dispatch(ordersInf({}));
  }, [dispatch]);

  return (    
    <ContentContainer>
      <ContentBlock>

        <OrdersUserNameFilter />
        {orders.length > 0 && <OrdersAll orders={orders} />}
        
      </ContentBlock>
    </ContentContainer>
  );
}