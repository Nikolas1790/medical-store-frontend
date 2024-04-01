import { ContentBlock, ContentContainer } from "common/GiobalStyles";
import UserNameFilter from "components/UserNameFilter/UserNameFilter";
import { productsInf } from "../../redux/ePharmacy/operations";

export default function Products() {  
  return (
    <ContentContainer>
      <ContentBlock>

        <UserNameFilter dataFactory={productsInf} plholder="Product  Name"/>
        Products


      </ContentBlock>
    </ContentContainer>
  );
}