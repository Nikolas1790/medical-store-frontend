import { ContentBlock, ContentContainer } from "common/GiobalStyles";
import UserNameFilter from "components/UserNameFilter/UserNameFilter";
import { suppliersInf } from "../../redux/ePharmacy/operations";

export default function Suppliers() {  

  return (
    <ContentContainer>
      <ContentBlock>

        <UserNameFilter dataFactory={suppliersInf}/>
        Supplierss
      </ContentBlock>
    </ContentContainer>
  );
}