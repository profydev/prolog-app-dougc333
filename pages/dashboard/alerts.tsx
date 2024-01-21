import { PageContainer } from "@features/layout";
import type { NextPage } from "next";
import PageAlert from "./pagealert";
const AlertsPage: NextPage = () => {
  return (
    <PageContainer
      title="Alerts"
      info="Set up alerts to received notifications for certain issues or thresholds"
    >
      <PageAlert></PageAlert>
    </PageContainer>
  );
};

export default AlertsPage;
