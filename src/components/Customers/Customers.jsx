import { ContentBlock, ContentContainer } from "common/GiobalStyles";
import UserNameFilter from "components/UserNameFilter/UserNameFilter";
import { customersInf } from "../../redux/ePharmacy/operations";

export default function Customers() {  

  return (
    <ContentContainer>
      <ContentBlock>
<UserNameFilter dataFactory={customersInf}/>
        
      </ContentBlock>
    </ContentContainer>
  );
}