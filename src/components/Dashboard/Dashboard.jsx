import { ContentBlock, ContentContainer } from "common/GiobalStyles";
import DashboardIncomeExpenses from "components/DashboardIncomeExpenses/DashboardIncomeExpenses";
import DashboardRecentCustomers from "components/DashboardRecentCustomers/DashboardRecentCustomers";
import DashboardStatistic from "components/DashboardStatistic/DashboardStatistic";
import { TableConteiner } from "./Dashboard.styled";

export default function Dashboard() { 
  return (
    <ContentContainer>
      <ContentBlock top="20px" bottom="40px" >
        <DashboardStatistic />

        <TableConteiner>
          <DashboardRecentCustomers />
          <DashboardIncomeExpenses />
        </TableConteiner>
      </ContentBlock>
    </ContentContainer>
  );
}