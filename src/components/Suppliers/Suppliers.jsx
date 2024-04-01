import { ContentBlock, ContentContainer } from "common/GiobalStyles";
import UserNameFilter from "components/UserNameFilter/UserNameFilter";
import { suppliersInf } from "../../redux/ePharmacy/operations";
import SuppliersAll from "components/SuppliersAll/SuppliersAll";
import { useDispatch, useSelector } from "react-redux";
import { selectSuppliersInf } from "../../redux/ePharmacy/selector";
import { useEffect } from "react";

export default function Suppliers() {  
  const dispatch = useDispatch();
  const suppliers = useSelector(selectSuppliersInf);  
  console.log(suppliers)

  useEffect(() => {
    dispatch(suppliersInf({}));
  }, [dispatch]);

  return (
    <ContentContainer>
      <ContentBlock>

        <UserNameFilter dataFactory={suppliersInf}/>
        <SuppliersAll suppliers={suppliers} />
        Supplierss
      </ContentBlock>
    </ContentContainer>
  );
}