import { ContentBlock, ContentContainer } from "common/GiobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { selectOrdersInf } from "../../redux/ePharmacy/selector";
import { ordersInf } from "../../redux/ePharmacy/operations";
import { useEffect } from "react";
import OrdersAll from "components/OrdersAll/OrdersAll";
import UserNameFilter from "components/UserNameFilter/UserNameFilter";

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

        <UserNameFilter  dataFactory={ordersInf} />
        <OrdersAll orders={orders} />
        
      </ContentBlock>
    </ContentContainer>
  );
}