import { CremssBar } from "./CremssBar";
import { Sidebar } from "./Sidebar";
import { AppHeader } from "./AppHeader";
import { TabBar } from "./TabBar";
import { Dashboard, TeamSchedule, StockInventory, TechnicalSheets, SupplierOrders, CheckoutBookings } from "../screens";
import { GuidedTour } from "../guided-tour";
import { Assistant, AssistantButton } from "../assistant";
import { DemoEnd } from "../demo-end";

export function DemoApp() {
  return (
    <div>
      <CremssBar />
      <Sidebar />
      <AppHeader />
      <TabBar />
      <Dashboard />
      <TeamSchedule />
      <StockInventory />
      <TechnicalSheets />
      <SupplierOrders />
      <CheckoutBookings />
      <GuidedTour />
      <Assistant />
      <AssistantButton />
      <DemoEnd />
    </div>
  );
}
