import { ContentBlock, ContentContainer } from "common/GiobalStyles";
import DashboardStatistic from "components/DashboardStatistic/DashboardStatistic";


export default function Dashboard() {  

  return (
    <ContentContainer>
      <ContentBlock>
        <DashboardStatistic />
        Dashboard
      </ContentBlock>
    </ContentContainer>
  );
}