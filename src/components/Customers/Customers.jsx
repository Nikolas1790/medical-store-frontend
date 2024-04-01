import { ContentBlock, ContentContainer } from "common/GiobalStyles";
import UserNameFilter from "components/UserNameFilter/UserNameFilter";
import { customersInf } from "../../redux/ePharmacy/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectCustomersInf } from "../../redux/ePharmacy/selector";
import { useEffect } from "react";
import CustomersAll from "components/CustomersAll/CustomersAll";

export default function Customers() {  
  const dispatch = useDispatch();
  const customers = useSelector(selectCustomersInf);  
  // console.log(orders)

  useEffect(() => {
    dispatch(customersInf({}));
  }, [dispatch]);

  return (
    <ContentContainer>
      <ContentBlock>

        <UserNameFilter dataFactory={customersInf}/>
        <CustomersAll customers={customers}/>

        
      </ContentBlock>
    </ContentContainer>
  );
}